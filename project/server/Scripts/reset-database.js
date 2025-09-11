const db = require('../config/database');

async function resetDatabase() {
  try {
    console.log('Resetting database...');
    
    // Drop tables if they exist
    await db.execute('DROP TABLE IF EXISTS colleges');
    await db.execute('DROP TABLE IF EXISTS users');
    
    console.log('Dropped existing tables');
    
    // Recreate users table
    await db.execute(`
      CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    
    // Recreate colleges table
    await db.execute(`
      CREATE TABLE colleges (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        city VARCHAR(100) NOT NULL,
        state VARCHAR(100),
        type ENUM('University', 'College', 'Institute') NOT NULL DEFAULT 'College',
        ranking INT NULL,
        nirf_ranking INT NULL,
        degrees JSON NOT NULL,
        description TEXT,
        logo VARCHAR(500),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        
        INDEX idx_state (state),
        INDEX idx_city (city),
        INDEX idx_type (type),
        INDEX idx_ranking (ranking),
        INDEX idx_nirf_ranking (nirf_ranking)
      )
    `);
    
    console.log('Database reset completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Database reset failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  resetDatabase();
}

module.exports = resetDatabase;