// seeders/quizSeeder.js
const { pool } = require('../config/database');
const crypto = require('crypto');

const quizData = {
  categories: [
    {
      id: crypto.randomUUID(),
      name: 'Aptitude',
      description: 'Logical reasoning and numerical aptitude tests',
      icon: 'BrainCircuit'
    },
    {
      id: crypto.randomUUID(),
      name: 'JEE',
      description: 'Joint Entrance Examination preparation',
      icon: 'BookOpen'
    },
    {
      id: crypto.randomUUID(),
      name: 'NEET',
      description: 'Medical entrance examination preparation',
      icon: 'Stethoscope'
    },
    {
      id: crypto.randomUUID(),
      name: 'Reasoning',
      description: 'Logical and analytical reasoning',
      icon: 'Lightbulb'
    },
    {
      id: crypto.randomUUID(),
      name: 'Career Assessment',
      description: 'Career guidance and personality assessments',
      icon: 'Briefcase'
    }
  ],
  
  quizzes: [
    {
      title: 'Numerical Aptitude Test',
      description: 'Test your numerical reasoning and mathematical problem-solving skills',
      category: 'Aptitude',
      difficulty_level: 'intermediate',
      duration_minutes: 30,
      questions: [
        {
          question_text: 'If a train travels 60 km in 45 minutes, what is its speed in km/hr?',
          options: ['70 km/hr', '75 km/hr', '80 km/hr', '85 km/hr'],
          correct_answer: '80 km/hr',
          explanation: 'Speed = Distance/Time = 60/(45/60) = 60/0.75 = 80 km/hr',
          marks: 2,
          difficulty: 'medium'
        },
        {
          question_text: 'What is 25% of 240?',
          options: ['50', '60', '70', '80'],
          correct_answer: '60',
          explanation: '25% of 240 = (25/100) × 240 = 60',
          marks: 1,
          difficulty: 'easy'
        },
        {
          question_text: 'A product costs Rs. 200. After a 15% discount, what is the selling price?',
          options: ['Rs. 170', 'Rs. 175', 'Rs. 180', 'Rs. 185'],
          correct_answer: 'Rs. 170',
          explanation: 'Discount = 15% of 200 = 30. Selling price = 200 - 30 = Rs. 170',
          marks: 2,
          difficulty: 'medium'
        }
      ]
    },
    {
      title: 'Logical Reasoning Challenge',
      description: 'Test your logical thinking and pattern recognition abilities',
      category: 'Reasoning',
      difficulty_level: 'intermediate',
      duration_minutes: 25,
      questions: [
        {
          question_text: 'In a certain code, APPLE is written as BQQMF. How is BERRY written?',
          options: ['CFSSZ', 'CFSSQ', 'CFSRZ', 'CFSSRZ'],
          correct_answer: 'CFSSZ',
          explanation: 'Each letter is shifted by +1 in the alphabet: B+1=C, E+1=F, R+1=S, R+1=S, Y+1=Z',
          marks: 2,
          difficulty: 'medium'
        },
        {
          question_text: 'Which number comes next in the sequence: 2, 6, 12, 20, 30, ?',
          options: ['40', '42', '44', '46'],
          correct_answer: '42',
          explanation: 'Pattern: 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42',
          marks: 2,
          difficulty: 'hard'
        },
        {
          question_text: 'If all roses are flowers and some flowers are red, which conclusion is correct?',
          options: ['All roses are red', 'Some roses are red', 'No roses are red', 'Cannot be determined'],
          correct_answer: 'Cannot be determined',
          explanation: 'We know all roses are flowers, but we don\'t know if roses are among the red flowers.',
          marks: 2,
          difficulty: 'hard'
        }
      ]
    },
    {
      title: 'JEE Physics Mock Test',
      description: 'Practice questions for JEE Main Physics preparation',
      category: 'JEE',
      difficulty_level: 'advanced',
      duration_minutes: 40,
      questions: [
        {
          question_text: 'A ball is thrown vertically upward with velocity 20 m/s. What is the maximum height reached? (g = 10 m/s²)',
          options: ['15 m', '20 m', '25 m', '30 m'],
          correct_answer: '20 m',
          explanation: 'Using v² = u² - 2gh, at max height v=0, so h = u²/2g = 400/20 = 20 m',
          marks: 4,
          difficulty: 'medium'
        },
        {
          question_text: 'What is the dimensional formula of force?',
          options: ['[MLT⁻²]', '[ML²T⁻²]', '[MLT⁻¹]', '[ML²T⁻¹]'],
          correct_answer: '[MLT⁻²]',
          explanation: 'Force = mass × acceleration = M × LT⁻² = [MLT⁻²]',
          marks: 2,
          difficulty: 'easy'
        }
      ]
    },
    {
      title: 'NEET Biology Basics',
      description: 'Fundamental biology concepts for NEET preparation',
      category: 'NEET',
      difficulty_level: 'intermediate',
      duration_minutes: 35,
      questions: [
        {
          question_text: 'Which organelle is called the powerhouse of the cell?',
          options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Endoplasmic Reticulum'],
          correct_answer: 'Mitochondria',
          explanation: 'Mitochondria produces ATP through cellular respiration, providing energy for cellular processes.',
          marks: 1,
          difficulty: 'easy'
        },
        {
          question_text: 'What is the process by which plants make their food?',
          options: ['Respiration', 'Photosynthesis', 'Transpiration', 'Digestion'],
          correct_answer: 'Photosynthesis',
          explanation: 'Photosynthesis converts light energy into chemical energy (glucose) using CO₂ and water.',
          marks: 1,
          difficulty: 'easy'
        }
      ]
    },
    {
      title: 'Career Interest Assessment',
      description: 'Discover your career interests and suitable fields',
      category: 'Career Assessment',
      difficulty_level: 'beginner',
      duration_minutes: 20,
      questions: [
        {
          question_text: 'Which activity interests you the most?',
          options: ['Solving mathematical problems', 'Creative writing', 'Helping others', 'Building things'],
          correct_answer: 'varies',
          explanation: 'Different answers indicate different career orientations.',
          marks: 1,
          difficulty: 'easy'
        },
        {
          question_text: 'In a group project, you prefer to:',
          options: ['Lead the team', 'Do detailed research', 'Present to audience', 'Handle logistics'],
          correct_answer: 'varies',
          explanation: 'Your preference indicates your working style and suitable roles.',
          marks: 1,
          difficulty: 'easy'
        }
      ]
    }
  ]
};

async function seedQuizData() {
  const connection = await pool.getConnection();
  
  try {
    await connection.beginTransaction();
    
    console.log('🌱 Starting quiz data seeding...');
    
    // Clear existing data
    await connection.execute('DELETE FROM quiz_results');
    await connection.execute('DELETE FROM quiz_attempts');
    await connection.execute('DELETE FROM quiz_questions');
    await connection.execute('DELETE FROM quizzes');
    await connection.execute('DELETE FROM quiz_categories');
    
    // Insert categories
    for (const category of quizData.categories) {
      await connection.execute(
        'INSERT INTO quiz_categories (id, name, description, icon) VALUES (?, ?, ?, ?)',
        [category.id, category.name, category.description, category.icon]
      );
    }
    console.log('✅ Quiz categories inserted');
    
    // Insert quizzes and questions
    for (const quizInfo of quizData.quizzes) {
      const quizId = crypto.randomUUID();
      const category = quizData.categories.find(c => c.name === quizInfo.category);
      
      // Insert quiz
      await connection.execute(
        `INSERT INTO quizzes 
         (id, title, description, category_id, difficulty_level, total_questions, duration_minutes, passing_score)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          quizId, 
          quizInfo.title, 
          quizInfo.description, 
          category.id, 
          quizInfo.difficulty_level,
          quizInfo.questions.length,
          quizInfo.duration_minutes,
          60.0
        ]
      );
      
      // Insert questions
      for (const question of quizInfo.questions) {
        const questionId = crypto.randomUUID();
        await connection.execute(
          `INSERT INTO quiz_questions 
           (id, quiz_id, question_text, question_type, options, correct_answer, explanation, marks, difficulty)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            questionId,
            quizId,
            question.question_text,
            'multiple_choice',
            JSON.stringify(question.options),
            question.correct_answer,
            question.explanation,
            question.marks,
            question.difficulty
          ]
        );
      }
    }
    
    console.log('✅ Quizzes and questions inserted');
    
    await connection.commit();
    console.log('🎉 Quiz data seeding completed successfully!');
    
  } catch (error) {
    await connection.rollback();
    console.error('❌ Error seeding quiz data:', error);
    throw error;
  } finally {
    connection.release();
  }
}

module.exports = { seedQuizData };

// Run seeder if called directly
if (require.main === module) {
  seedQuizData()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
}