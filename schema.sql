/*write commands that would be in the database to insert any data needed in your database
this helps use not do it in the termminal*/
DROP DATABASE IF EXIST test;

CREATE DATABASE test;

USE test;

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  quantity int NOT NULL,
  description varchar(50) NOT NULL,
  PRIMARY KEY(ID)
)
