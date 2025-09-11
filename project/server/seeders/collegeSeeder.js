// server/seeders/collegeSeeder.js
const College = require('../models/College');

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
  {
    name: 'Manipal Academy of Higher Education',
    city: 'Manipal',
    state: 'Karnataka',
    type: 'University',
    nirfRanking: 3,
    degrees: ['M.B.B.S.', 'B.Tech.', 'B.Arch.', 'B.Pharm.', 'M.D.', 'M.S.', 'M.Tech.'],
    description: 'Private deemed university with excellence in medical and engineering education'
  },
  {
    name: 'Jamia Millia Islamia',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'University',
    nirfRanking: 4,
    degrees: ['B.A.', 'B.Sc.', 'B.Tech.', 'B.B.A.', 'L.L.B.', 'M.A.', 'M.Sc.', 'M.B.A.', 'Ph.D.'],
    description: 'Central university established during the Indian independence movement'
  },
  {
    name: 'University of Delhi',
    city: 'Delhi',
    state: 'Delhi',
    type: 'University',
    nirfRanking: 5,
    degrees: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.'],
    description: 'One of India\'s largest universities with numerous affiliated colleges'
  },
  {
    name: 'Banaras Hindu University',
    city: 'Varanasi',
    state: 'Uttar Pradesh',
    type: 'University',
    nirfRanking: 6,
    degrees: ['B.A.', 'B.Sc.', 'B.Com.', 'B.Tech.', 'M.B.B.S.', 'M.A.', 'M.Sc.', 'Ph.D.'],
    description: 'One of the largest residential universities in Asia'
  },
  {
    name: 'Birla Institute of Technology & Science',
    city: 'Pilani',
    state: 'Rajasthan',
    type: 'Institute',
    nirfRanking: 7,
    degrees: ['B.E.', 'B.Pharm.', 'M.Sc.', 'M.E.', 'M.Pharm.', 'M.B.A.', 'Ph.D.'],
    description: 'Private institute known for engineering and science education'
  },
  {
    name: 'Amrita Vishwa Vidyapeetham',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    type: 'University',
    nirfRanking: 8,
    degrees: ['B.Tech.', 'M.B.B.S.', 'B.A.', 'B.Sc.', 'M.Tech.', 'M.D.', 'M.S.', 'M.B.A.'],
    description: 'Multi-disciplinary private university with focus on research'
  },
  {
    name: 'Jadavpur University',
    city: 'Kolkata',
    state: 'West Bengal',
    type: 'University',
    nirfRanking: 9,
    degrees: ['B.A.', 'B.Sc.', 'B.E.', 'B.Tech.', 'M.A.', 'M.Sc.', 'M.E.', 'M.Tech.', 'Ph.D.'],
    description: 'State university known for engineering and arts education'
  },
  {
    name: 'Aligarh Muslim University',
    city: 'Aligarh',
    state: 'Uttar Pradesh',
    type: 'University',
    nirfRanking: 10,
    degrees: ['B.A.', 'B.Sc.', 'B.Com.', 'B.Tech.', 'M.B.B.S.', 'M.A.', 'M.Sc.', 'M.B.A.'],
    description: 'Central university with rich heritage and diverse academic programs'
  },
  // Colleges
  {
    name: 'Hindu College',
    city: 'Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 1,
    degrees: ['B.A. (Hons.)', 'B.Sc. (Hons.)', 'B.Com. (Hons.)'],
    description: 'Premier undergraduate college under University of Delhi'
  },
  {
    name: 'Miranda House',
    city: 'Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 2,
    degrees: ['B.A. (Hons.)', 'B.Sc. (Hons.)', 'B.El.Ed.'],
    description: 'Women\'s college known for academic excellence'
  },
  {
    name: 'Hans Raj College',
    city: 'Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 3,
    degrees: ['B.A. (Hons.)', 'B.Sc. (Hons.)', 'B.Com. (Hons.)'],
    description: 'Premier undergraduate college with diverse academic programs'
  },
  {
    name: 'Kirori Mal College',
    city: 'Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 4,
    degrees: ['B.A. (Hons.)', 'B.Sc. (Hons.)', 'B.Com. (Hons.)'],
    description: 'Constituent college of University of Delhi'
  },
  {
    name: 'St. Stephen\'s College',
    city: 'Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 5,
    degrees: ['B.A. (Hons.)', 'B.Sc. (Hons.)'],
    description: 'Prestigious liberal arts college with Christian heritage'
  }
  // Add more colleges here - you can expand this array with all 200 institutions
];

class CollegeSeeder {
  static async seedColleges() {
    try {
      console.log('Starting college seeding...');
      
      for (const collegeData of collegesData) {
        try {
          await College.create(collegeData);
          console.log(`Created: ${collegeData.name}`);
        } catch (error) {
          console.error(`Failed to create ${collegeData.name}:`, error.message);
        }
      }
      
      console.log('College seeding completed!');
    } catch (error) {
      console.error('Seeding failed:', error);
    }
  }
  
  static async clearAndSeed() {
    try {
      const db = require('../config/database');
      await db.execute('DELETE FROM colleges');
      console.log('Cleared existing colleges');
      
      await this.seedColleges();
    } catch (error) {
      console.error('Clear and seed failed:', error);
    }
  }
}

module.exports = CollegeSeeder;