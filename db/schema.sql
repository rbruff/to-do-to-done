### Schema

-- DROP DATABASE IF EXISTS burgers_db;
CREATE database task_db;

USE task_db;

CREATE TABLE burgers (
  id INT AUTO_INCREMENT,
  burger_name VARCHAR(100),
  devoured BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (id)
);
