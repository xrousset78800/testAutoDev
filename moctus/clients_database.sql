-- Clients Database Schema

CREATE TABLE IF NOT EXISTS clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    first_name VARCHAR(255),
    phone_number VARCHAR(20),
    email VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS publications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT,
    publication_type ENUM('private-sale', 'rental'),
    description TEXT,
    price DECIMAL(10, 2),
    FOREIGN KEY (client_id) REFERENCES clients(id)
);