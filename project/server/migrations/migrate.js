// migrations/migrate.js
const fs = require('fs').promises;
const path = require('path');
const db = require('../config/database'); // db.pool will be the promise-based pool

async function runMigrations() {
  try {
    console.log('Starting database migrations...');

    const migrationFiles = [
      '001_create_users_table.sql',
      '002_create_colleges_table.sql'
    ];

    for (const file of migrationFiles) {
      const migrationPath = path.join(__dirname, file);
      console.log(`\n📄 Running migration: ${file}`);

      const migrationSQL = await fs.readFile(migrationPath, 'utf8');

      // Split statements properly
      const statements = migrationSQL
        .split(/;\s*$/m)
        .map(stmt => stmt.trim())
        .filter(stmt => stmt.length > 0);

      console.log(`➡️ Executing ${statements.length} statements...`);

      for (const statement of statements) {
        try {
          // Use the promise pool
          await db.pool.execute(statement);
        } catch (stmtError) {
          console.error(`❌ Error executing statement: ${statement.substring(0, 60)}...`);
          throw stmtError;
        }
      }
    }

    console.log('\n✅ All database migrations completed successfully!');
  } catch (error) {
    console.error('\n❌ Migration failed:', error.message);
    process.exit(1);
  } finally {
    await db.pool.end();
  }
}

runMigrations();
