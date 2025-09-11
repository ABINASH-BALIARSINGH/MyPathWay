const { pool } = require('../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.password_hash = data.password_hash;
    this.role = data.role;
    this.avatar = data.avatar;
    this.is_active = data.is_active;
    this.email_verified = data.email_verified;
    this.courses_completed = data.courses_completed;
    this.total_courses = data.total_courses;
    this.certificates_earned = data.certificates_earned;
    this.tests_taken = data.tests_taken;
    this.average_score = data.average_score;
    this.skills = Array.isArray(data.skills) ? data.skills : [];
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
    this.last_login = data.last_login;
  }

  static async findById(id) {
    const [rows] = await pool.execute('SELECT * FROM users WHERE id = ? AND is_active = TRUE', [id]);
    if (!rows[0]) return null;
    const data = rows[0];
    try {
      data.skills = data.skills ? JSON.parse(data.skills) : [];
    } catch {
      data.skills = [];
    }
    return new User(data);
  }

  static async findByEmail(email) {
    const [rows] = await pool.execute('SELECT * FROM users WHERE email = ? AND is_active = TRUE', [email]);
    if (!rows[0]) return null;
    const data = rows[0];
    try {
      data.skills = data.skills ? JSON.parse(data.skills) : [];
    } catch {
      data.skills = [];
    }
    return new User(data);
  }

  static async create({ name, email, password, role = 'learner' }) {
    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT_ROUNDS) || 12);
    const id = crypto.randomUUID();

    await pool.execute(
      `INSERT INTO users (id, name, email, password_hash, role, skills, courses_completed, total_courses, certificates_earned, tests_taken, average_score)
       VALUES (?, ?, ?, ?, ?, ?, 0, 0, 0, 0, 0)`,
      [id, name, email, hashedPassword, role, JSON.stringify([])]
    );

    return User.findById(id);
  }

  async verifyPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }

  generateToken() {
    return jwt.sign(
      { userId: this.id, email: this.email, role: this.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );
  }

  // Session management methods (missing from your original code)
  async storeSession(token) {
    // For simplicity, we'll just verify the token is valid
    // In production, you might want to store sessions in Redis or database
    try {
      jwt.verify(token, process.env.JWT_SECRET);
      return true;
    } catch (error) {
      throw new Error('Invalid token for session storage');
    }
  }

  static async verifySession(token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId);
      return user;
    } catch (error) {
      return null;
    }
  }

  static async logout(token) {
    // For JWT tokens, logout is typically handled client-side by removing the token
    // You could implement a blacklist here if needed
    return true;
  }

  async updateLastLogin() {
    await pool.execute(
      'UPDATE users SET last_login = NOW() WHERE id = ?',
      [this.id]
    );
    this.last_login = new Date().toISOString();
  }

  async updateProfile(updates) {
    const allowedFields = ['name', 'avatar', 'skills'];
    const updateFields = [];
    const updateValues = [];

    Object.keys(updates).forEach(key => {
      if (allowedFields.includes(key) && updates[key] !== undefined) {
        updateFields.push(`${key} = ?`);
        updateValues.push(key === 'skills' ? JSON.stringify(updates[key]) : updates[key]);
      }
    });

    if (updateFields.length === 0) {
      return this;
    }

    updateValues.push(this.id);
    await pool.execute(
      `UPDATE users SET ${updateFields.join(', ')}, updated_at = NOW() WHERE id = ?`,
      updateValues
    );

    return User.findById(this.id);
  }

  async updateProgress(progressData) {
    const {
      coursesCompleted,
      totalCourses,
      certificatesEarned,
      testsTaken,
      averageScore
    } = progressData;

    const updates = [];
    const values = [];

    if (coursesCompleted !== undefined) {
      updates.push('courses_completed = ?');
      values.push(coursesCompleted);
    }
    if (totalCourses !== undefined) {
      updates.push('total_courses = ?');
      values.push(totalCourses);
    }
    if (certificatesEarned !== undefined) {
      updates.push('certificates_earned = ?');
      values.push(certificatesEarned);
    }
    if (testsTaken !== undefined) {
      updates.push('tests_taken = ?');
      values.push(testsTaken);
    }
    if (averageScore !== undefined) {
      updates.push('average_score = ?');
      values.push(averageScore);
    }

    if (updates.length === 0) {
      return this;
    }

    values.push(this.id);
    await pool.execute(
      `UPDATE users SET ${updates.join(', ')}, updated_at = NOW() WHERE id = ?`,
      values
    );

    return User.findById(this.id);
  }

  getPublicInfo() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      role: this.role,
      avatar: this.avatar,
      skills: this.skills,
      progress: {
        coursesCompleted: this.courses_completed || 0,
        totalCourses: this.total_courses || 0,
        certificatesEarned: this.certificates_earned || 0,
        testsTaken: this.tests_taken || 0,
        averageScore: parseFloat(this.average_score) || 0,
      },
      createdAt: this.created_at,
      lastLogin: this.last_login,
    };
  }
}

module.exports = User;