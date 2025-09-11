const mysql = require('mysql2/promise');
require('dotenv').config();

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  charset: 'utf8mb4',
  timezone: '+00:00'
};

// Create connection pool
const pool = mysql.createPool(dbConfig);

// Test database connection
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Database connected successfully');
    connection.release();
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
};

// Initialize database
const initializeDatabase = async () => {
  try {
    // Create database if it doesn't exist
    const tempPool = mysql.createPool({
      ...dbConfig,
      database: undefined
    });
    
    await tempPool.execute(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);
    await tempPool.end();
    
    // Test connection to the actual database
    await testConnection();
  } catch (error) {
    console.error('Database initialization failed:', error.message);
    process.exit(1);
  }
};

module.exports = {
  pool,
  testConnection,
  initializeDatabase
};