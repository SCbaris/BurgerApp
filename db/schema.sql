DROP DATABASE IF EXISTS sh7uq68n0xw5vmp0;
CREATE DATABASE sh7uq68n0xw5vmp0;
USE sh7uq68n0xw5vmp0;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

-- Table name is burgers. -- 
-- Burgers has 2 properities. Devoured and name. --
-- We will initilize burger name with text box. -- 