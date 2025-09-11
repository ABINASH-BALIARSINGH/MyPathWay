const collegesData = [
  // Universities (Top 30 from NIRF 2024)
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
    description: 'Central university known for social sciences and humanities'
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
  // Add more universities here...

  // Colleges (Top 30 from NIRF 2024)
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
  // Add all 200 colleges here following the same pattern
];

module.exports = collegesData;