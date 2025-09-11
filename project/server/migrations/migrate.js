const fs = require('fs').promises;
const path = require('path');
const { pool } = require('../config/database');

async function runMigrations() {
  try {
    console.log('Starting database migrations...');
    
    // Read migration file
    const migrationPath = path.join(__dirname, '001_create_users_table.sql');
    const migrationSQL = await fs.readFile(migrationPath, 'utf8');
    
    // Split by semicolons and filter out empty statements
    const statements = migrationSQL
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0);
    
    // Execute each statement
    for (const statement of statements) {
      console.log('Executing:', statement.substring(0, 50) + '...');
      await pool.execute(statement);
    }
    
    console.log('✅ Database migrations completed successfully!');
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

runMigrations();