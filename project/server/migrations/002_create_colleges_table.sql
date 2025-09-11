CREATE TABLE IF NOT EXISTS colleges (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100),
  type ENUM('University', 'College', 'Institute') NOT NULL DEFAULT 'College',
  ranking INT NULL,
  nirf_ranking INT NULL,
  degrees JSON NOT NULL,
  description TEXT,
  logo VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  INDEX idx_state (state),
  INDEX idx_city (city),
  INDEX idx_type (type),
  INDEX idx_ranking (ranking),
  INDEX idx_nirf_ranking (nirf_ranking)
);