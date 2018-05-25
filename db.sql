DROP DATABASE IF EXISTS greatBay_DB;

CREATE DATABASE greatBay_DB;

USE greatBay_DB;

CREATE TABLE auctions (
   id INTEGER(11) NOT NULL AUTO_INCREMENT,
   name VARCHAR(50) NOT NULL,
   price FLOAT(50) NOT NULL,
   PRIMARY KEY (id)
);

INSERT INTO auctions (name, price)
VALUES ("Dolls",  50);

SELECT * FROM auctions;