// server/seeders/collegeSeeder.js
const { pool } = require('../config/database');

const collegesData = [
  // Universities
  {
    name: 'Indian Institute of Science',
    city: 'Bengaluru',
    state: 'Karnataka',
    type: 'Institute',
    nirfRanking: 1,
    degrees: ['B.S. (Research)', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier institute for scientific research and higher education',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Indian_Institute_of_Science_logo.svg/1200px-Indian_Institute_of_Science_logo.svg.png'
  },
  {
    name: 'Jawaharlal Nehru University',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'University',
    nirfRanking: 2,
    degrees: ['B.A. (Hons.)', 'M.A.', 'M.Sc.', 'M.C.A.', 'Ph.D.'],
    description: 'Central university known for social sciences and humanities',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Jawaharlal_Nehru_University_logo.svg/1200px-Jawaharlal_Nehru_University_logo.svg.png'
  },
  // ... Add the rest of your colleges here
];

class CollegeSeeder {
  // Insert all colleges
  static async seedColleges() {
    try {
      console.log('Starting college seeding...');
      
      for (const college of collegesData) {
        try {
          const query = `
            INSERT INTO colleges 
              (name, city, state, type, nirf_ranking, degrees, description, logo, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
          `;
          await pool.execute(query, [
            college.name,
            college.city,
            college.state,
            college.type,
            college.nirfRanking || null,
            JSON.stringify(college.degrees || []),
            college.description || null,
            college.logo || null
          ]);

          console.log(`Created: ${college.name}`);
        } catch (err) {
          console.error(`Failed to create ${college.name}:`, err.message);
        }
      }

      console.log('College seeding completed!');
    } catch (err) {
      console.error('Seeding failed:', err.message);
      throw err;
    }
  }

  // Clear table and seed
  static async clearAndSeed() {
    try {
      console.log('Clearing existing colleges...');
      await pool.execute('DELETE FROM colleges');
      console.log('Cleared existing colleges');

      await this.seedColleges();
    } catch (err) {
      console.error('Clear and seed failed:', err.message);
      throw err;
    }
  }
}

module.exports = CollegeSeeder;
