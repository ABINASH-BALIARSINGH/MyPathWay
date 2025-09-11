const mysql = require('mysql2/promise');
require('dotenv').config();

async function setupDatabase() {
  let connection;
  
  try {
    console.log('Setting up database...');
    
    // First, connect without specifying database
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    });
    
    console.log('Connected to MySQL server');
    
    // Create database if it doesn't exist (use query, not execute)
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\``);
    console.log(`Database ${process.env.DB_NAME} created or already exists`);
    
    // Switch to the database (use query, not execute)
    await connection.query(`USE \`${process.env.DB_NAME}\``);
    console.log(`Using database ${process.env.DB_NAME}`);
    
    // Check if tables exist (this one can stay execute, since it has ? placeholder)
    const [tables] = await connection.execute(`
      SELECT TABLE_NAME 
      FROM information_schema.tables 
      WHERE table_schema = ?
    `, [process.env.DB_NAME]);
    
    console.log('Existing tables:', tables.map(t => t.TABLE_NAME));
    
    console.log('Database setup completed successfully!');
    
  } catch (error) {
    console.error('Database setup failed:');
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    
    if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.log('\nTroubleshooting steps:');
      console.log('1. Check your MySQL username and password in .env file');
      console.log('2. Make sure MySQL server is running');
      console.log('3. Try connecting with MySQL client: mysql -u root -p');
      console.log('4. If needed, reset MySQL root password');
    }
    
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

setupDatabase();
