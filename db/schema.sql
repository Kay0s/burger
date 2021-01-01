DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE DATABASE burgers_db;

CREATE burgers (
    id INT NOT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(30)
    devoured BOOLEAN
);
