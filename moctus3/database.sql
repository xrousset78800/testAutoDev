-- Create the database
CREATE DATABASE publication_manager;

USE publication_manager;

-- Create the clients table
CREATE TABLE clients (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  first_name VARCHAR(255),
  phone_number VARCHAR(20),
  email VARCHAR(100)
);

-- Create the publications table
CREATE TABLE publications (
  id INT PRIMARY KEY AUTO_INCREMENT,
  client_id INT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10,2),
  sale_type ENUM('private', 'ongoing'),
  permalink VARCHAR(50),
  FOREIGN KEY (client_id) REFERENCES clients(id)
);

-- Create the photos and videos tables
CREATE TABLE photos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  publication_id INT,
  file_name VARCHAR(255),
  FOREIGN KEY (publication_id) REFERENCES publications(id)
);

CREATE TABLE videos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  publication_id INT,
  file_name VARCHAR(255),
  FOREIGN KEY (publication_id) REFERENCES publications(id)
);
