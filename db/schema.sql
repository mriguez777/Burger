
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    devoured BOOLEAN,
    PRIMARY KEY(id)
);

SELECT * FROM Burgers;