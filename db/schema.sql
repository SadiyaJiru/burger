DROP DATABASE IF EXISTS BurgersDB;
CREATE DATABASE BurgersDB;
USE burgersDB;

CREATE TABLE burgers(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(50) NOT NULL,
devoured BOOLEAN DEFAULT false,
date TIMESTAMP not null DEFAULT current_timestamp,
PRIMARY KEY(id)
);
