const fs = require('fs').promises;
const path = require('path');
const { pool } = require('../config/database');

async function runMigrations() {
  try {
    console.log('Starting database migrations...');

    // List of migration files in order
    const migrationFiles = [
      '001_create_users_table.sql',
      '002_create_colleges_table.sql'
    ];

    for (const file of migrationFiles) {
      const migrationPath = path.join(__dirname, file);
      console.log(`\n📄 Running migration: ${file}`);

      // Read file content
      const migrationSQL = await fs.readFile(migrationPath, 'utf8');

      // Split by semicolons and filter out empty statements
      const statements = migrationSQL
        .split(';')
        .map(stmt => stmt.trim())
        .filter(stmt => stmt.length > 0);

      // Execute each statement
      for (const statement of statements) {
        console.log('➡️ Executing:', statement.substring(0, 60) + '...');
        await pool.execute(statement);
      }
    }

    console.log('\n✅ All database migrations completed successfully!');
  } catch (error) {
    console.error('\n❌ Migration failed:', error.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

runMigrations();
