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
    this.role = data.role || 'learner';
    this.avatar = data.avatar;
    this.is_active = data.is_active !== undefined ? data.is_active : true;
    this.email_verified = data.email_verified || false;
    this.skills = [];
      try {
        this.skills = data.skills ? JSON.parse(data.skills) : [];
      } catch (err) {
        this.skills = [];
      }

      this.courses_completed = [];
      try {
        this.courses_completed = data.courses_completed ? JSON.parse(data.courses_completed) : [];
      } catch (err) {
        this.courses_completed = [];
      }

    this.total_courses = data.total_courses || 0;
    this.certificates_earned = data.certificates_earned || 0;
    this.tests_taken = data.tests_taken || 0;
    this.average_score = data.average_score || 0;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
    this.last_login = data.last_login;
  }

  // ------------------ FIND BY ID ------------------
  static async findById(id) {
    const [rows] = await pool.execute(
      'SELECT * FROM users WHERE id = ? AND is_active = TRUE',
      [id]
    );
    if (!rows[0]) return null;
    return new User(rows[0]);
  }

  // ------------------ FIND BY EMAIL ------------------
  static async findByEmail(email) {
    const [rows] = await pool.execute(
      'SELECT * FROM users WHERE email = ? AND is_active = TRUE',
      [email]
    );
    if (!rows[0]) return null;
    return new User(rows[0]);
  }

  // ------------------ CREATE USER ------------------
  static async create({ name, email, password, role = 'learner' }) {
    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.BCRYPT_SALT_ROUNDS) || 12
    );
    const id = crypto.randomUUID();

    const skills = JSON.stringify([]);
    const courses_completed = JSON.stringify([]);

    await pool.execute(
      `INSERT INTO users 
        (id, name, email, password_hash, role, skills, courses_completed, total_courses, certificates_earned, tests_taken, average_score, created_at, updated_at) 
       VALUES (?, ?, ?, ?, ?, ?, ?, 0, 0, 0, 0, NOW(), NOW())`,
      [id, name, email, hashedPassword, role, skills, courses_completed]
    );

    return User.findById(id);
  }

  // ------------------ VERIFY PASSWORD ------------------
  async verifyPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }

  // ------------------ TOKEN GENERATION ------------------
  generateToken() {
    return jwt.sign(
      { userId: this.id, email: this.email, role: this.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE || '7d' }
    );
  }

  // ------------------ SESSION MANAGEMENT ------------------
  async storeSession(token) {
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
    // JWT logout is client-side; could implement blacklist if needed
    return true;
  }

  // ------------------ UPDATE LAST LOGIN ------------------
  async updateLastLogin() {
    await pool.execute(
      'UPDATE users SET last_login = NOW() WHERE id = ?',
      [this.id]
    );
    this.last_login = new Date().toISOString();
  }

  // ------------------ UPDATE PROFILE ------------------
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

    if (updateFields.length === 0) return this;

    updateValues.push(this.id);
    await pool.execute(
      `UPDATE users SET ${updateFields.join(', ')}, updated_at = NOW() WHERE id = ?`,
      updateValues
    );

    return User.findById(this.id);
  }

  // ------------------ UPDATE PROGRESS ------------------
  async updateProgress(progressData) {
    const updates = [];
    const values = [];

    if (progressData.coursesCompleted !== undefined) {
      updates.push('courses_completed = ?');
      values.push(JSON.stringify(progressData.coursesCompleted));
    }
    if (progressData.totalCourses !== undefined) {
      updates.push('total_courses = ?');
      values.push(progressData.totalCourses);
    }
    if (progressData.certificatesEarned !== undefined) {
      updates.push('certificates_earned = ?');
      values.push(progressData.certificatesEarned);
    }
    if (progressData.testsTaken !== undefined) {
      updates.push('tests_taken = ?');
      values.push(progressData.testsTaken);
    }
    if (progressData.averageScore !== undefined) {
      updates.push('average_score = ?');
      values.push(progressData.averageScore);
    }

    if (updates.length === 0) return this;

    values.push(this.id);
    await pool.execute(
      `UPDATE users SET ${updates.join(', ')}, updated_at = NOW() WHERE id = ?`,
      values
    );

    return User.findById(this.id);
  }

  // ------------------ PUBLIC USER INFO ------------------
  getPublicInfo() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      role: this.role,
      avatar: this.avatar,
      skills: this.skills,
      progress: {
        coursesCompleted: this.courses_completed || [],
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
