-- Create clients table
CREATE TABLE IF NOT EXISTS clients (
  id INT AUTO_INCREMENT,
  name VARCHAR(255),
  prenom VARCHAR(255),
  phone_number VARCHAR(20),
  email VARCHAR(100),
  PRIMARY KEY (id)
);

-- Insert sample data into the clients table
INSERT INTO clients (name, prenom, phone_number, email) VALUES
('John Doe', 'Jean-Pierre', '+33 6 12 34 56 78', 'john.doe@example.com'),
('Jane Smith', 'Jacqueline-Marie', '+44 7 89 01 23 45', 'jane.smith@example.com');

-- Create publications table
CREATE TABLE IF NOT EXISTS publications (
  id INT AUTO_INCREMENT,
  title VARCHAR(255),
  description TEXT,
  price DECIMAL(10,2),
  client_id INT,
  PRIMARY KEY (id)
);

-- Insert sample data into the publications table
INSERT INTO publications (title, description, price, client_id) VALUES
('Private Sale', 'A private sale of a luxury item.', 1000.00, 1),
('Ongoing Auction', 'An ongoing auction for a rare collectible.', 5000.00, 2);