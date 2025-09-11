const { pool } = require('../config/database');

class College {
  // Get all colleges with optional filters
  static async findAll(filters = {}) {
    let query = 'SELECT * FROM colleges WHERE 1=1';
    const values = [];

    if (filters.state) {
      query += ' AND state = ?';
      values.push(filters.state);
    }
    if (filters.city) {
      query += ' AND city = ?';
      values.push(filters.city);
    }
    if (filters.type) {
      query += ' AND type = ?';
      values.push(filters.type);
    }
    if (filters.degree) {
      query += ' AND JSON_CONTAINS(degrees, ?)';
      values.push(`"${filters.degree}"`);
    }
    if (filters.search) {
      query += ' AND name LIKE ?';
      values.push(`%${filters.search}%`);
    }
    if (filters.limit) {
      query += ' LIMIT ?';
      values.push(parseInt(filters.limit));
    }

    const [rows] = await pool.execute(query, values);
    return rows;
  }

  // Get one college by ID
  static async findById(id) {
    const [rows] = await pool.execute('SELECT * FROM colleges WHERE id = ?', [id]);
    return rows[0] || null;
  }

  // Get unique filter options
  static async getFilterOptions() {
    const [states] = await pool.execute('SELECT DISTINCT state FROM colleges');
    const [cities] = await pool.execute('SELECT DISTINCT city FROM colleges');
    const [types] = await pool.execute('SELECT DISTINCT type FROM colleges');

    return {
      states: states.map(s => s.state),
      cities: cities.map(c => c.city),
      types: types.map(t => t.type),
    };
  }

  // Create a new college
  static async create(data) {
    const { name, city, state, type, degrees, description, logo } = data;
    const [result] = await pool.execute(
      `INSERT INTO colleges (name, city, state, type, degrees, description, logo, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
      [name, city, state, type, JSON.stringify(degrees || []), description || null, logo || null]
    );
    return result.insertId;
  }
}

module.exports = College;
