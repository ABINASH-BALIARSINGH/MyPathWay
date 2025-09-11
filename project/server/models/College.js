// server/models/College.js
const db = require('../config/database');

class College {
  static async create(collegeData) {
    const {
      name,
      city,
      state,
      type,
      ranking,
      nirfRanking,
      degrees,
      description,
      logo
    } = collegeData;

    const query = `
      INSERT INTO colleges (name, city, state, type, ranking, nirf_ranking, degrees, description, logo, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
    `;

    try {
      const [result] = await db.execute(query, [
        name,
        city,
        state,
        type,
        ranking || null,
        nirfRanking || null,
        JSON.stringify(degrees),
        description || null,
        logo || null
      ]);
      return result.insertId;
    } catch (error) {
      throw new Error(`Failed to create college: ${error.message}`);
    }
  }

  static async findAll(filters = {}) {
    let query = `
      SELECT id, name, city, state, type, ranking, nirf_ranking, degrees, description, logo
      FROM colleges
      WHERE 1=1
    `;
    const params = [];

    // Add filters
    if (filters.state && filters.state !== 'All') {
      query += ` AND state = ?`;
      params.push(filters.state);
    }

    if (filters.city && filters.city !== 'All') {
      query += ` AND city = ?`;
      params.push(filters.city);
    }

    if (filters.type && filters.type !== 'All') {
      query += ` AND type = ?`;
      params.push(filters.type);
    }

    if (filters.degree && filters.degree !== 'All') {
      query += ` AND JSON_SEARCH(degrees, 'one', ?) IS NOT NULL`;
      params.push(`%${filters.degree}%`);
    }

    if (filters.search) {
      query += ` AND (name LIKE ? OR city LIKE ? OR state LIKE ?)`;
      params.push(`%${filters.search}%`, `%${filters.search}%`, `%${filters.search}%`);
    }

    // Order by ranking
    query += ` ORDER BY 
      CASE 
        WHEN nirf_ranking IS NOT NULL THEN nirf_ranking 
        WHEN ranking IS NOT NULL THEN ranking 
        ELSE 999999 
      END ASC`;

    if (filters.limit) {
      query += ` LIMIT ?`;
      params.push(parseInt(filters.limit));
    }

    try {
      const [rows] = await db.execute(query, params);
      return rows.map(row => ({
        ...row,
        degrees: JSON.parse(row.degrees)
      }));
    } catch (error) {
      throw new Error(`Failed to fetch colleges: ${error.message}`);
    }
  }

  static async getFilterOptions() {
    try {
      const [states] = await db.execute(`
        SELECT DISTINCT state FROM colleges WHERE state IS NOT NULL ORDER BY state
      `);
      
      const [cities] = await db.execute(`
        SELECT DISTINCT city FROM colleges WHERE city IS NOT NULL ORDER BY city
      `);
      
      const [types] = await db.execute(`
        SELECT DISTINCT type FROM colleges WHERE type IS NOT NULL ORDER BY type
      `);

      // Get unique degrees from JSON field
      const [degreesResult] = await db.execute(`SELECT degrees FROM colleges`);
      const allDegrees = new Set();
      
      degreesResult.forEach(row => {
        try {
          const degrees = JSON.parse(row.degrees);
          degrees.forEach(degree => allDegrees.add(degree));
        } catch (e) {
          // Skip invalid JSON
        }
      });

      return {
        states: states.map(s => s.state),
        cities: cities.map(c => c.city),
        types: types.map(t => t.type),
        degrees: Array.from(allDegrees).sort()
      };
    } catch (error) {
      throw new Error(`Failed to get filter options: ${error.message}`);
    }
  }

  static async findById(id) {
    const query = `
      SELECT id, name, city, state, type, ranking, nirf_ranking, degrees, description, logo
      FROM colleges WHERE id = ?
    `;

    try {
      const [rows] = await db.execute(query, [id]);
      if (rows.length === 0) return null;
      
      const college = rows[0];
      college.degrees = JSON.parse(college.degrees);
      return college;
    } catch (error) {
      throw new Error(`Failed to fetch college: ${error.message}`);
    }
  }
}

module.exports = College;