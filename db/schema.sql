DROP DATABASE IF EXISTS uiqcs2dhuvnhtrau;
CREATE DATABASE uiqcs2dhuvnhtrau;
USE uiqcs2dhuvnhtrau;

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