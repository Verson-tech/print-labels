CREATE DATABASE IF NOT EXISTS christmas_cards;
USE christmas_cards;

CREATE TABLE IF NOT EXISTS recipients (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(10) NOT NULL,
  zip VARCHAR(20) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO recipients (name, address, city, state, zip) VALUES
('John & Jane Smith', '123 Maple Street', 'Springfield', 'IL', '62701'),
('The Anderson Family', '456 Oak Avenue', 'Portland', 'OR', '97201'),
('Robert & Mary Johnson', '789 Pine Road', 'Austin', 'TX', '78701'),
('The Williams Household', '321 Elm Boulevard', 'Seattle', 'WA', '98101'),
('David & Sarah Brown', '654 Cedar Lane', 'Denver', 'CO', '80201'),
('Michael & Lisa Davis', '987 Birch Court', 'Boston', 'MA', '02101'),
('The Miller Family', '147 Spruce Drive', 'Phoenix', 'AZ', '85001'),
('Christopher & Jennifer Wilson', '258 Willow Way', 'Nashville', 'TN', '37201');
