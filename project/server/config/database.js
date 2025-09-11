const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'mypathway_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  charset: 'utf8mb4',
  timezone: '+00:00',
  multipleStatements: true
};

const pool = mysql.createPool(dbConfig);

const testConnection = async () => {
  try {
    const conn = await pool.getConnection();
    console.log('Database connected successfully');
    conn.release();
  } catch (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1);
  }
};

const initializeDatabase = async () => {
  try {
    const tempPool = mysql.createPool({ ...dbConfig, database: undefined });
    await tempPool.execute(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\``);
    await tempPool.end();
    await testConnection();
  } catch (err) {
    console.error('Database initialization failed:', err.message);
    process.exit(1);
  }
};

module.exports = { pool, testConnection, initializeDatabase };
