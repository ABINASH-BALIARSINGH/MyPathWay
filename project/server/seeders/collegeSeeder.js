// server/seeders/collegeSeeder.js
const { pool } = require('../config/database');

const collegesData = [
  // Colleges from the first file (Arts & Science Colleges)
  {
    name: 'Hindu College',
    city: 'Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 1,
    degrees: ['B.A. (Hons.)', 'B.Sc. (Hons.)', 'B.Com. (Hons.)'],
    description: 'Top-ranked college under University of Delhi',
    logo: null
  },
  {
    name: 'Miranda House',
    city: 'Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 2,
    degrees: ['B.A. (Hons.)', 'B.Sc. (Hons.)', 'B.El.Ed.'],
    description: 'Women\'s college under University of Delhi',
    logo: null
  },
  {
    name: 'Hans Raj College',
    city: 'Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 3,
    degrees: ['B.A. (Hons.)', 'B.Sc. (Hons.)', 'B.Com. (Hons.)'],
    description: 'College under University of Delhi',
    logo: null
  },
  {
    name: 'Kirori Mal College',
    city: 'Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 4,
    degrees: ['B.A. (Hons.)', 'B.Sc. (Hons.)', 'B.Com. (Hons.)'],
    description: 'College under University of Delhi',
    logo: null
  },
  {
    name: 'St. Stephens\'s College',
    city: 'Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 5,
    degrees: ['B.A. (Hons.)', 'B.Sc. (Hons.)'],
    description: 'Prestigious college under University of Delhi',
    logo: null
  },
  {
    name: 'Rama Krishna Mission Vivekananda Centenary College',
    city: 'Kolkata',
    state: 'West Bengal',
    type: 'College',
    nirfRanking: 6,
    degrees: ['B.A. (Hons.)', 'B.Sc. (Hons.)'],
    description: 'College under University of Calcutta',
    logo: null
  },
  {
    name: 'Atma Ram Sanatan Dharm College',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 7,
    degrees: ['B.A. (Hons.)', 'B.Sc. (Hons.)', 'B.Com. (Hons.)'],
    description: 'College under University of Delhi',
    logo: null
  },
  {
    name: 'St. Xavier\'s College',
    city: 'Kolkata',
    state: 'West Bengal',
    type: 'College',
    nirfRanking: 8,
    degrees: ['B.A.', 'B.Sc.', 'B.Com.', 'B.B.A.'],
    description: 'Autonomous college in Kolkata',
    logo: null
  },
  {
    name: 'PSGR Krishnammal College for Women',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    type: 'College',
    nirfRanking: 9,
    degrees: ['B.A.', 'B.Sc.', 'B.Com.', 'B.B.A.', 'B.C.A.'],
    description: 'Women\'s college in Coimbatore',
    logo: null
  },
  {
    name: 'PSG College of Arts and Science',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    type: 'College',
    nirfRanking: 10,
    degrees: ['B.A.', 'B.Sc.', 'B.Com.', 'B.B.A.', 'B.C.A.'],
    description: 'College in Coimbatore',
    logo: null
  },
  {
    name: 'Sri Venkateswara College',
    city: 'Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 11,
    degrees: ['B.A. (Hons.)', 'B.Sc. (Hons.)', 'B.Com. (Hons.)'],
    description: 'College under University of Delhi',
    logo: null
  },
  {
    name: 'Rajagiri College of Social Sciences',
    city: 'Ernakulam',
    state: 'Kerala',
    type: 'College',
    nirfRanking: 12,
    degrees: ['B.S.W.', 'B.Com.', 'M.S.W.', 'M.A. (HRM)'],
    description: 'College specializing in social sciences',
    logo: null
  },
  {
    name: 'Deshbandhu College',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 13,
    degrees: ['B.A.', 'B.Sc.', 'B.Com.'],
    description: 'College under University of Delhi',
    logo: null
  },
  {
    name: 'Loyola College',
    city: 'Chennai',
    state: 'Tamil Nadu',
    type: 'College',
    nirfRanking: 14,
    degrees: ['B.A.', 'B.Sc.', 'B.Com.', 'B.B.A.', 'B.C.A.'],
    description: 'Autonomous college in Chennai',
    logo: null
  },
  {
    name: 'Presidency College',
    city: 'Chennai',
    state: 'Tamil Nadu',
    type: 'College',
    nirfRanking: 15,
    degrees: ['B.A.', 'B.Sc.', 'B.Com.'],
    description: 'Historic college in Chennai',
    logo: null
  },
  {
    name: 'Madras Christian College',
    city: 'Chennai',
    state: 'Tamil Nadu',
    type: 'College',
    nirfRanking: 16,
    degrees: ['B.A.', 'B.Sc.', 'B.Com.', 'B.S.W.', 'B.B.A.'],
    description: 'Autonomous college in Chennai',
    logo: null
  },
  {
    name: 'Lady Shri Ram College For Women',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 17,
    degrees: ['B.A. (Hons.)', 'B.Sc. (Hons.)', 'B.Com. (Hons.)', 'B.El.Ed.'],
    description: 'Women\'s college under University of Delhi',
    logo: null
  },
  {
    name: 'Shri Ram College of Commerce',
    city: 'Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 18,
    degrees: ['B.Com. (Hons.)', 'B.A. (Hons.) Economics'],
    description: 'Premier commerce college under University of Delhi',
    logo: null
  },
  {
    name: 'Ramakrishna Mission Vidyamandira',
    city: 'Howrah',
    state: 'West Bengal',
    type: 'College',
    nirfRanking: 19,
    degrees: ['B.A. (Hons.)', 'B.Sc. (Hons.)'],
    description: 'College under University of Calcutta',
    logo: null
  },
  {
    name: 'Thiagarajar College',
    city: 'Madurai',
    state: 'Tamil Nadu',
    type: 'College',
    nirfRanking: 20,
    degrees: ['B.A.', 'B.Sc.', 'B.Com.', 'B.B.A.'],
    description: 'College in Madurai',
    logo: null
  },
  {
    name: 'Acharya Narendra Dev College',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 21,
    degrees: ['B.Sc. (Hons.)', 'B.Com. (Hons.)'],
    description: 'College under University of Delhi',
    logo: null
  },
  {
    name: 'V.O. Chidambaram College',
    city: 'Thoothukudi',
    state: 'Tamil Nadu',
    type: 'College',
    nirfRanking: 22,
    degrees: ['B.A.', 'B.Sc.', 'B.Com.'],
    description: 'College in Thoothukudi',
    logo: null
  },
  {
    name: 'University College, Thiruvananthapuram',
    city: 'Thiruvananthapuram',
    state: 'Kerala',
    type: 'College',
    nirfRanking: 23,
    degrees: ['B.A.', 'B.Sc.'],
    description: 'College under University of Kerala',
    logo: null
  },
  {
    name: 'Ramakrishna Mission Residential College',
    city: 'Kolkata',
    state: 'West Bengal',
    type: 'College',
    nirfRanking: 24,
    degrees: ['B.A. (Hons.)', 'B.Sc. (Hons.)'],
    description: 'College under University of Calcutta',
    logo: null
  },
  {
    name: 'St. Joseph\'s College, Tiruchirappalli',
    city: 'Tiruchirappalli',
    state: 'Tamil Nadu',
    type: 'College',
    nirfRanking: 25,
    degrees: ['B.A.', 'B.Sc.', 'B.Com.', 'B.C.A.'],
    description: 'Autonomous college in Tiruchirappalli',
    logo: null
  },
  {
    name: 'Daulat Ram College',
    city: 'Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 26,
    degrees: ['B.A. (Hons.)', 'B.Sc. (Hons.)', 'B.Com. (Hons.)'],
    description: 'Women\'s college under University of Delhi',
    logo: null
  },
  {
    name: 'Deen Dayal Upadhyaya College',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 27,
    degrees: ['B.Sc. (Hons.)', 'B.A.', 'B.M.S.'],
    description: 'College under University of Delhi',
    logo: null
  },
  {
    name: 'Ramjas College',
    city: 'Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 28,
    degrees: ['B.A. (Hons.)', 'B.Sc. (Hons.)', 'B.Com. (Hons.)'],
    description: 'College under University of Delhi',
    logo: null
  },
  {
    name: 'Sri Guru Tegh Bahadur Khalsa College',
    city: 'Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 29,
    degrees: ['B.A. (Hons.)', 'B.Sc. (Hons.)', 'B.Com. (Hons.)'],
    description: 'College under University of Delhi',
    logo: null
  },
  {
    name: 'Delhi College of Arts & Commerce',
    city: 'South West',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 30,
    degrees: ['B.A. (Hons.)', 'B.Com. (Hons.)'],
    description: 'College under University of Delhi',
    logo: null
  },
  {
    name: 'Lady Irwin College',
    city: 'Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 31,
    degrees: ['B.Sc. (Hons.) Home Science', 'B.Ed.'],
    description: 'Women\'s college specializing in home science',
    logo: null
  },
  {
    name: 'Sri Guru Gobind Singh College of Commerce',
    city: 'Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 32,
    degrees: ['B.Com. (Hons.)', 'B.A. (Hons.) Economics', 'B.Sc. (Hons.)'],
    description: 'Commerce college under University of Delhi',
    logo: null
  },
  {
    name: 'Gargi College',
    city: 'Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 33,
    degrees: ['B.A.', 'B.Sc.', 'B.Com.', 'B.El.Ed.'],
    description: 'Women\'s college under University of Delhi',
    logo: null
  },
  {
    name: 'Kristu Jayanti College',
    city: 'Bengaluru',
    state: 'Karnataka',
    type: 'College',
    nirfRanking: 34,
    degrees: ['B.A.', 'B.Sc.', 'B.Com.', 'B.B.A.', 'B.C.A.'],
    description: 'Autonomous college in Bengaluru',
    logo: null
  },
  {
    name: 'Govt Home Science College',
    city: 'Chandigarh',
    state: 'Chandigarh',
    type: 'College',
    nirfRanking: 35,
    degrees: ['B.Sc. (Home Science)', 'B.Sc. (Fashion Designing)'],
    description: 'College specializing in home science',
    logo: null
  },
  {
    name: 'Dyal Singh College',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 36,
    degrees: ['B.A. (Hons.)', 'B.Sc. (Hons.)', 'B.Com. (Hons.)'],
    description: 'College under University of Delhi',
    logo: null
  },
  {
    name: 'Ramanujan College',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 37,
    degrees: ['B.A. (Hons.)', 'B.Com. (Hons.)', 'B.Sc. (Hons.)'],
    description: 'College under University of Delhi',
    logo: null
  },
  {
    name: 'Maitreyi College',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 38,
    degrees: ['B.A. (Hons.)', 'B.Sc. (Hons.)', 'B.Com. (Hons.)'],
    description: 'Women\'s college under University of Delhi',
    logo: null
  },
  {
    name: 'Shaheed Bhagat Singh College',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 39,
    degrees: ['B.A. (Hons.)', 'B.Com. (Hons.)'],
    description: 'College under University of Delhi',
    logo: null
  },
  {
    name: 'Dhanalakshmi Srinivasan College of Arts & Science for Women',
    city: 'Perambalur',
    state: 'Tamil Nadu',
    type: 'College',
    nirfRanking: 40,
    degrees: ['B.A.', 'B.Sc.', 'B.Com.', 'B.B.A.', 'B.C.A.'],
    description: 'Women\'s college in Perambalur',
    logo: null
  },
  {
    name: 'Stella Maris College for Women',
    city: 'Chennai',
    state: 'Tamil Nadu',
    type: 'College',
    nirfRanking: 41,
    degrees: ['B.A.', 'B.Sc.', 'B.Com.', 'B.Voc.', 'B.S.W.'],
    description: 'Women\'s college in Chennai',
    logo: null
  },
  {
    name: 'Midnapore College',
    city: 'Midnapore',
    state: 'West Bengal',
    type: 'College',
    nirfRanking: 42,
    degrees: ['B.A. (Hons.)', 'B.Sc. (Hons.)'],
    description: 'College in Midnapore',
    logo: null
  },
  {
    name: 'Shyam Lal College',
    city: 'Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 43,
    degrees: ['B.A. (Hons.)', 'B.Sc. (Hons.)', 'B.Com. (Hons.)'],
    description: 'College under University of Delhi',
    logo: null
  },
  {
    name: 'Sacred Heart College',
    city: 'Kochi',
    state: 'Kerala',
    type: 'College',
    nirfRanking: 44,
    degrees: ['B.A.', 'B.Sc.', 'B.Com.'],
    description: 'Autonomous college in Kochi',
    logo: null
  },
  {
    name: 'Bhaskaracharya College of Applied Sciences',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 45,
    degrees: ['B.Sc. (Hons.) in various applied sciences'],
    description: 'College specializing in applied sciences',
    logo: null
  },
  {
    name: 'Bishop Heber College',
    city: 'Tiruchirappalli',
    state: 'Tamil Nadu',
    type: 'College',
    nirfRanking: 46,
    degrees: ['B.A.', 'B.Sc.', 'B.Com.', 'B.B.A.', 'B.C.A.'],
    description: 'Autonomous college in Tiruchirappalli',
    logo: null
  },
  {
    name: 'Lady Brabourne College',
    city: 'Kolkata',
    state: 'West Bengal',
    type: 'College',
    nirfRanking: 47,
    degrees: ['B.A. (Hons.)', 'B.Sc. (Hons.)'],
    description: 'Women\'s college under University of Calcutta',
    logo: null
  },
  {
    name: 'Maharaja Agrasen College',
    city: 'Delhi',
    state: 'Delhi',
    type: 'College',
    nirfRanking: 48,
    degrees: ['B.A. (Hons.)', 'B.Com. (Hons.)'],
    description: 'College under University of Delhi',
    logo: null
  },
  {
    name: 'St. Xavier\'s College',
    city: 'Mumbai',
    state: 'Maharashtra',
    type: 'College',
    nirfRanking: 49,
    degrees: ['B.A.', 'B.Sc.', 'B.Com.', 'B.M.M.'],
    description: 'Autonomous college in Mumbai',
    logo: null
  },
  {
    name: 'Sri S. Ramasamy Naidu Memorial College',
    city: 'Sattur',
    state: 'Tamil Nadu',
    type: 'College',
    nirfRanking: 50,
    degrees: ['B.A.', 'B.Sc.', 'B.Com.'],
    description: 'College in Sattur',
    logo: null
  },
  
  // Colleges from the second file (Engineering Colleges)
  {
    name: 'Indian Institute of Technology Madras',
    city: 'Chennai',
    state: 'Tamil Nadu',
    type: 'Institute',
    nirfRanking: 1,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Indian Institute of Technology Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'Institute',
    nirfRanking: 2,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Indian Institute of Technology Bombay',
    city: 'Mumbai',
    state: 'Maharashtra',
    type: 'Institute',
    nirfRanking: 3,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Indian Institute of Technology Kanpur',
    city: 'Kanpur',
    state: 'Uttar Pradesh',
    type: 'Institute',
    nirfRanking: 4,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Indian Institute of Technology Kharagpur',
    city: 'Kharagpur',
    state: 'West Bengal',
    type: 'Institute',
    nirfRanking: 5,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Indian Institute of Technology Roorkee',
    city: 'Roorkee',
    state: 'Uttarakhand',
    type: 'Institute',
    nirfRanking: 6,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Indian Institute of Technology Guwahati',
    city: 'Guwahati',
    state: 'Assam',
    type: 'Institute',
    nirfRanking: 7,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Indian Institute of Technology Hyderabad',
    city: 'Hyderabad',
    state: 'Telangana',
    type: 'Institute',
    nirfRanking: 8,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'National Institute of Technology Tiruchirappalli',
    city: 'Tiruchirappalli',
    state: 'Tamil Nadu',
    type: 'Institute',
    nirfRanking: 9,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Indian Institute of Technology Indore',
    city: 'Indore',
    state: 'Madhya Pradesh',
    type: 'Institute',
    nirfRanking: 10,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Indian Institute of Technology (BHU) Varanasi',
    city: 'Varanasi',
    state: 'Uttar Pradesh',
    type: 'Institute',
    nirfRanking: 11,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Indian Institute of Technology Ropar',
    city: 'Rupnagar',
    state: 'Punjab',
    type: 'Institute',
    nirfRanking: 12,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Jadavpur University',
    city: 'Kolkata',
    state: 'West Bengal',
    type: 'University',
    nirfRanking: 13,
    degrees: ['B.Tech.', 'M.Tech.', 'B.E.', 'M.E.', 'Ph.D.'],
    description: 'Public university with strong engineering programs',
    logo: null
  },
  {
    name: 'Indian Institute of Technology Patna',
    city: 'Patna',
    state: 'Bihar',
    type: 'Institute',
    nirfRanking: 14,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'National Institute of Technology Karnataka, Surathkal',
    city: 'Mangalore',
    state: 'Karnataka',
    type: 'Institute',
    nirfRanking: 15,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Indian Institute of Technology Gandhinagar',
    city: 'Gandhinagar',
    state: 'Gujarat',
    type: 'Institute',
    nirfRanking: 16,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Indian Institute of Technology Mandi',
    city: 'Mandi',
    state: 'Himachal Pradesh',
    type: 'Institute',
    nirfRanking: 17,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Indian Institute of Technology Jodhpur',
    city: 'Jodhpur',
    state: 'Rajasthan',
    type: 'Institute',
    nirfRanking: 18,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'National Institute of Technology Rourkela',
    city: 'Rourkela',
    state: 'Odisha',
    type: 'Institute',
    nirfRanking: 19,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Indian Institute of Technology Bhilai',
    city: 'Bhilai',
    state: 'Chhattisgarh',
    type: 'Institute',
    nirfRanking: 20,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Indian Institute of Technology Bhubaneswar',
    city: 'Bhubaneswar',
    state: 'Odisha',
    type: 'Institute',
    nirfRanking: 21,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Indian Institute of Technology Jammu',
    city: 'Jammu',
    state: 'Jammu and Kashmir',
    type: 'Institute',
    nirfRanking: 22,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Indian Institute of Technology Dhanbad',
    city: 'Dhanbad',
    state: 'Jharkhand',
    type: 'Institute',
    nirfRanking: 23,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Indian Institute of Technology Palakkad',
    city: 'Palakkad',
    state: 'Kerala',
    type: 'Institute',
    nirfRanking: 24,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Indian Institute of Technology Goa',
    city: 'Goa',
    state: 'Goa',
    type: 'Institute',
    nirfRanking: 25,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Indian Institute of Technology Tirupati',
    city: 'Tirupati',
    state: 'Andhra Pradesh',
    type: 'Institute',
    nirfRanking: 26,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Indian Institute of Technology Dharwad',
    city: 'Dharwad',
    state: 'Karnataka',
    type: 'Institute',
    nirfRanking: 27,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'National Institute of Technology Warangal',
    city: 'Warangal',
    state: 'Telangana',
    type: 'Institute',
    nirfRanking: 28,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Indian Institute of Technology (ISM) Dhanbad',
    city: 'Dhanbad',
    state: 'Jharkhand',
    type: 'Institute',
    nirfRanking: 29,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Birla Institute of Technology and Science, Pilani',
    city: 'Pilani',
    state: 'Rajasthan',
    type: 'Institute',
    nirfRanking: 30,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Vellore Institute of Technology',
    city: 'Vellore',
    state: 'Tamil Nadu',
    type: 'Institute',
    nirfRanking: 31,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Private engineering institute',
    logo: null
  },
  {
    name: 'Indian Institute of Space Science and Technology, Thiruvananthapuram',
    city: 'Thiruvananthapuram',
    state: 'Kerala',
    type: 'Institute',
    nirfRanking: 32,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Institute specializing in space science and technology',
    logo: null
  },
  {
    name: 'Indian Institute of Engineering Science and Technology, Shibpur',
    city: 'Howrah',
    state: 'West Bengal',
    type: 'Institute',
    nirfRanking: 33,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Delhi Technological University',
    city: 'Delhi',
    state: 'Delhi',
    type: 'University',
    nirfRanking: 34,
    degrees: ['B.Tech.', 'M.Tech.', 'Ph.D.'],
    description: 'State university specializing in engineering',
    logo: null
  },
  {
    name: 'National Institute of Technology Calicut',
    city: 'Kozhikode',
    state: 'Kerala',
    type: 'Institute',
    nirfRanking: 35,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Thapar Institute of Engineering and Technology',
    city: 'Patiala',
    state: 'Punjab',
    type: 'Institute',
    nirfRanking: 36,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Private engineering institute',
    logo: null
  },
  {
    name: 'Indian Institute of Information Technology, Design and Manufacturing, Jabalpur',
    city: 'Jabalpur',
    state: 'Madhya Pradesh',
    type: 'Institute',
    nirfRanking: 37,
    degrees: ['B.Tech.', 'M.Tech.', 'Ph.D.'],
    description: 'Institute specializing in IT and manufacturing',
    logo: null
  },
  {
    name: 'National Institute of Technology, Kurukshetra',
    city: 'Kurukshetra',
    state: 'Haryana',
    type: 'Institute',
    nirfRanking: 38,
    degrees: ['B.Tech.', 'M.Tech.', 'M.Sc.', 'Ph.D.'],
    description: 'Premier engineering institute',
    logo: null
  },
  {
    name: 'Indian Institute of Science Education and Research, Pune',
    city: 'Pune',
    state: 'Maharashtra',
    type: 'Institute',
    nirfRanking: 39,
    degrees: ['B.S.', 'M.S.', 'Ph.D.'],
    description: 'Institute for science education and research',
    logo: null
  },
  {
    name: 'Indian Institute of Science Education and Research, Kolkata',
    city: 'Kolkata',
    state: 'West Bengal',
    type: 'Institute',
    nirfRanking: 40,
    degrees: ['B.S.', 'M.S.', 'Ph.D.'],
    description: 'Institute for science education and research',
    logo: null
  },
  {
    name: 'Indian Institute of Science Education and Research, Mohali',
    city: 'Mohali',
    state: 'Punjab',
    type: 'Institute',
    nirfRanking: 41,
    degrees: ['B.S.', 'M.S.', 'Ph.D.'],
    description: 'Institute for science education and research',
    logo: null
  },
  {
    name: 'Indian Institute of Science Education and Research, Bhopal',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    type: 'Institute',
    nirfRanking: 42,
    degrees: ['B.S.', 'M.S.', 'Ph.D.'],
    description: 'Institute for science education and research',
    logo: null
  },
  {
    name: 'Indian Institute of Science Education and Research, Thiruvananthapuram',
    city: 'Thiruvananthapuram',
    state: 'Kerala',
    type: 'Institute',
    nirfRanking: 43,
    degrees: ['B.S.', 'M.S.', 'Ph.D.'],
    description: 'Institute for science education and research',
    logo: null
  },
  {
    name: 'Institute of Chemical Technology',
    city: 'Mumbai',
    state: 'Maharashtra',
    type: 'Institute',
    nirfRanking: 44,
    degrees: ['B.Tech.', 'M.Tech.', 'Ph.D.'],
    description: 'Institute specializing in chemical technology',
    logo: null
  },
  {
    name: 'Jamia Millia Islamia',
    city: 'New Delhi',
    state: 'Delhi',
    type: 'University',
    nirfRanking: 45,
    degrees: ['B.Tech.', 'M.Tech.', 'B.Arch.', 'Ph.D.'],
    description: 'Central university with engineering programs',
    logo: null
  },
  {
    name: 'Indian Institute of Information Technology Allahabad',
    city: 'Prayagraj',
    state: 'Uttar Pradesh',
    type: 'Institute',
    nirfRanking: 46,
    degrees: ['B.Tech.', 'M.Tech.', 'Ph.D.'],
    description: 'Institute specializing in information technology',
    logo: null
  },
  {
    name: 'Indian Institute of Information Technology and Management, Gwalior',
    city: 'Gwalior',
    state: 'Madhya Pradesh',
    type: 'Institute',
    nirfRanking: 47,
    degrees: ['B.Tech.', 'M.Tech.', 'Ph.D.'],
    description: 'Institute specializing in IT and management',
    logo: null
  },
  {
    name: 'Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram',
    city: 'Chennai',
    state: 'Tamil Nadu',
    type: 'Institute',
    nirfRanking: 48,
    degrees: ['B.Tech.', 'M.Tech.', 'Ph.D.'],
    description: 'Institute specializing in IT and manufacturing',
    logo: null
  },
  {
    name: 'Indian Institute of Information Technology, Sri City',
    city: 'Chittoor',
    state: 'Andhra Pradesh',
    type: 'Institute',
    nirfRanking: 49,
    degrees: ['B.Tech.', 'M.Tech.', 'Ph.D.'],
    description: 'Institute specializing in information technology',
    logo: null
  },
  {
    name: 'Indian Institute of Information Technology, Vadodara',
    city: 'Vadodara',
    state: 'Gujarat',
    type: 'Institute',
    nirfRanking: 50,
    degrees: ['B.Tech.', 'M.Tech.', 'Ph.D.'],
    description: 'Institute specializing in information technology',
    logo: null
  }
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