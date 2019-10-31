-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "animals_db" database --
CREATE DATABASE burgers_db;

-- Makes it so all of the following code will affect animals_db --
USE burgers_db;

-- Creates the table "people" within animals_db --
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT, 
    burger_name VARCHAR(220) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)

);


