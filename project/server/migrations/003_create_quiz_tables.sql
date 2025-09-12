-- 003_create_quiz_tables.sql

-- Quiz categories table
CREATE TABLE IF NOT EXISTS quiz_categories (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  icon VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Quizzes table
CREATE TABLE IF NOT EXISTS quizzes (
  id VARCHAR(36) PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  category_id VARCHAR(36),
  difficulty_level ENUM('beginner', 'intermediate', 'advanced') DEFAULT 'intermediate',
  total_questions INT NOT NULL,
  duration_minutes INT NOT NULL,
  passing_score DECIMAL(5,2) DEFAULT 60.00,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES quiz_categories(id) ON DELETE SET NULL
);

-- Quiz questions table
CREATE TABLE IF NOT EXISTS quiz_questions (
  id VARCHAR(36) PRIMARY KEY,
  quiz_id VARCHAR(36) NOT NULL,
  question_text TEXT NOT NULL,
  question_type ENUM('multiple_choice', 'true_false', 'numerical') DEFAULT 'multiple_choice',
  options JSON, -- Store options as JSON array
  correct_answer VARCHAR(500) NOT NULL,
  explanation TEXT,
  marks DECIMAL(4,2) DEFAULT 1.00,
  difficulty ENUM('easy', 'medium', 'hard') DEFAULT 'medium',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE
);

-- Quiz attempts table
CREATE TABLE IF NOT EXISTS quiz_attempts (
  id VARCHAR(36) PRIMARY KEY,
  user_id VARCHAR(36) NOT NULL,
  quiz_id VARCHAR(36) NOT NULL,
  start_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  end_time TIMESTAMP NULL,
  total_score DECIMAL(6,2) DEFAULT 0.00,
  max_score DECIMAL(6,2) NOT NULL,
  percentage DECIMAL(5,2) DEFAULT 0.00,
  grade VARCHAR(5),
  time_taken_minutes INT DEFAULT 0,
  is_completed BOOLEAN DEFAULT FALSE,
  answers JSON, -- Store user answers as JSON
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE,
  INDEX idx_user_quiz (user_id, quiz_id),
  INDEX idx_quiz_date (quiz_id, created_at)
);

-- Quiz results summary table
CREATE TABLE IF NOT EXISTS quiz_results (
  id VARCHAR(36) PRIMARY KEY,
  attempt_id VARCHAR(36) NOT NULL UNIQUE,
  user_id VARCHAR(36) NOT NULL,
  quiz_id VARCHAR(36) NOT NULL,
  total_questions INT NOT NULL,
  correct_answers INT DEFAULT 0,
  wrong_answers INT DEFAULT 0,
  unanswered INT DEFAULT 0,
  accuracy_percentage DECIMAL(5,2) DEFAULT 0.00,
  time_per_question DECIMAL(6,2) DEFAULT 0.00,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (attempt_id) REFERENCES quiz_attempts(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE
);