const { pool } = require('../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.email = userData.email;
    this.password_hash = userData.password_hash;
    this.role = userData.role;
    this.avatar = userData.avatar;
    this.is_active = userData.is_active;
    this.email_verified = userData.email_verified;
    this.courses_completed = userData.courses_completed;
    this.total_courses = userData.total_courses;
    this.certificates_earned = userData.certificates_earned;
    this.tests_taken = userData.tests_taken;
    this.average_score = userData.average_score;
    this.skills = userData.skills || [];
    this.created_at = userData.created_at;
    this.updated_at = userData.updated_at;
    this.last_login = userData.last_login;
  }

  // Create a new user
  static async create(userData) {
    const { name, email, password, role = 'learner' } = userData;

    // Hash password
    const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS) || 12;
    const password_hash = await bcrypt.hash(password, saltRounds);

    const query = `
      INSERT INTO users (name, email, password_hash, role, skills)
      VALUES (?, ?, ?, ?, ?)
    `;

    const [result] = await pool.execute(query, [
      name,
      email,
      password_hash,
      role,
      JSON.stringify([])
    ]);

    return this.findById(result.insertId);
  }

  // Find user by ID
  static async findById(id) {
    const query = 'SELECT * FROM users WHERE id = ? AND is_active = TRUE';
    const [rows] = await pool.execute(query, [id]);

    if (rows.length === 0) return null;

    const userData = rows[0];
    try {
      userData.skills = userData.skills ? JSON.parse(userData.skills) : [];
    } catch (err) {
      console.error('Error parsing skills JSON:', err, 'Raw value:', userData.skills);
      userData.skills = [];
    }

    return new User(userData);
  }

  // Find user by email
  static async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = ? AND is_active = TRUE';
    const [rows] = await pool.execute(query, [email]);

    if (rows.length === 0) return null;

    const userData = rows[0];
    try {
      userData.skills = userData.skills ? JSON.parse(userData.skills) : [];
    } catch (err) {
      console.error('Error parsing skills JSON:', err, 'Raw value:', userData.skills);
      userData.skills = [];
    }

    return new User(userData);
  }

  // Verify password
  async verifyPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }

  // Generate JWT token
  generateToken() {
    if (!process.env.JWT_SECRET) throw new Error('JWT_SECRET not set');
    return jwt.sign(
      { userId: this.id, email: this.email, role: this.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );
  }

  // Update last login
  async updateLastLogin() {
    const query = 'UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = ?';
    await pool.execute(query, [this.id]);
  }

  // Update user profile
  async updateProfile(updates) {
    const allowedUpdates = ['name', 'avatar', 'skills'];
    const updateFields = [];
    const updateValues = [];

    Object.keys(updates).forEach(key => {
      if (allowedUpdates.includes(key)) {
        updateFields.push(`${key} = ?`);
        updateValues.push(key === 'skills' ? JSON.stringify(updates[key]) : updates[key]);
      }
    });

    if (updateFields.length === 0) {
      throw new Error('No valid fields to update');
    }

    updateValues.push(this.id);

    const query = `UPDATE users SET ${updateFields.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`;
    await pool.execute(query, updateValues);

    return this.constructor.findById(this.id);
  }

  // Update progress
  async updateProgress(progressData) {
    const {
      courses_completed,
      total_courses,
      certificates_earned,
      tests_taken,
      average_score
    } = progressData;

    const query = `
      UPDATE users
      SET courses_completed = COALESCE(?, courses_completed),
          total_courses = COALESCE(?, total_courses),
          certificates_earned = COALESCE(?, certificates_earned),
          tests_taken = COALESCE(?, tests_taken),
          average_score = COALESCE(?, average_score),
          updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `;

    await pool.execute(query, [
      courses_completed,
      total_courses,
      certificates_earned,
      tests_taken,
      average_score,
      this.id
    ]);

    return this.constructor.findById(this.id);
  }

  // Store session token
  async storeSession(token) {
    await pool.execute('DELETE FROM user_sessions WHERE expires_at < NOW()');

    const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    const query = 'INSERT INTO user_sessions (user_id, token_hash, expires_at) VALUES (?, ?, ?)';
    await pool.execute(query, [this.id, tokenHash, expiresAt]);
  }

  // Verify session token
  static async verifySession(token) {
    const tokenHash = crypto.createHash('sha256').update(token).digest('hex');

    const query = `
      SELECT u.* FROM users u
      INNER JOIN user_sessions s ON u.id = s.user_id
      WHERE s.token_hash = ? AND s.expires_at > NOW() AND u.is_active = TRUE
    `;

    const [rows] = await pool.execute(query, [tokenHash]);
    if (rows.length === 0) return null;

    const userData = rows[0];
    try {
      userData.skills = userData.skills ? JSON.parse(userData.skills) : [];
    } catch (err) {
      console.error('Error parsing skills JSON:', err, 'Raw value:', userData.skills);
      userData.skills = [];
    }

    return new User(userData);
  }

  // Logout (remove session)
  static async logout(token) {
    const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
    await pool.execute('DELETE FROM user_sessions WHERE token_hash = ?', [tokenHash]);
  }

  // Get user public info (without sensitive data)
  getPublicInfo() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      role: this.role,
      avatar: this.avatar,
      skills: this.skills,
      progress: {
        coursesCompleted: this.courses_completed,
        totalCourses: this.total_courses,
        certificatesEarned: this.certificates_earned,
        testsTaken: this.tests_taken,
        averageScore: parseFloat(this.average_score) || 0
      },
      createdAt: this.created_at,
      lastLogin: this.last_login
    };
  }
}

module.exports = User;
