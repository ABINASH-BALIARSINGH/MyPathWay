// server/scripts/seed-colleges.js
const CollegeSeeder = require('../seeders/collegeSeeder');

async function runSeeder() {
  try {
    await CollegeSeeder.clearAndSeed();
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  runSeeder();
}

module.exports = runSeeder;