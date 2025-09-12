const { pool } = require('../config/database');

async function resetDatabase() {
  try {
    console.log('Resetting database...');

    // Drop child tables first to avoid FK errors
    await pool.execute('DROP TABLE IF EXISTS user_sessions');
    await pool.execute('DROP TABLE IF EXISTS password_reset_tokens');
    await pool.execute('DROP TABLE IF EXISTS colleges');
    await pool.execute('DROP TABLE IF EXISTS users');

    console.log('Dropped existing tables');

    // Create users table
    await pool.execute(`
      CREATE TABLE users (
        id VARCHAR(36) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(50) NOT NULL DEFAULT 'learner',
        avatar VARCHAR(500) DEFAULT NULL,
        skills JSON NOT NULL,
        courses_completed JSON NOT NULL,
        total_courses INT DEFAULT 0,
        certificates_earned INT DEFAULT 0,
        tests_taken INT DEFAULT 0,
        average_score DECIMAL(5,2) DEFAULT 0,
        is_active BOOLEAN DEFAULT TRUE,
        email_verified BOOLEAN DEFAULT FALSE,
        last_login TIMESTAMP NULL DEFAULT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // Create user_sessions table
    await pool.execute(`
      CREATE TABLE user_sessions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id VARCHAR(36) NOT NULL,
        token VARCHAR(500) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);

    // Create password_reset_tokens table
    await pool.execute(`
      CREATE TABLE password_reset_tokens (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id VARCHAR(36) NOT NULL,
        token VARCHAR(500) NOT NULL,
        expires_at TIMESTAMP NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);

    // Create colleges table
    await pool.execute(`
      CREATE TABLE colleges (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        city VARCHAR(100) NOT NULL,
        state VARCHAR(100),
        type ENUM('University','College','Institute') NOT NULL DEFAULT 'College',
        ranking INT NULL,
        nirf_ranking INT NULL,
        degrees JSON NOT NULL,
        description TEXT,
        logo VARCHAR(500),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_state(state),
        INDEX idx_city(city),
        INDEX idx_type(type),
        INDEX idx_ranking(ranking),
        INDEX idx_nirf_ranking(nirf_ranking)
      )
    `);

    console.log('Database reset completed successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Database reset failed:', err.message);
    process.exit(1);
  }
}

if (require.main === module) {
  resetDatabase();
}

module.exports = resetDatabase;
