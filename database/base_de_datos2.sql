--
-- Creación de base de datos `testdb` 
--
CREATE DATABASE testdb;
-- Seleccionar la base de datos a usar 
USE testdb;
-- Estructura de tabla para la tabla `category`
CREATE TABLE Customers (
  Id INT NOT NULL AUTO_INCREMENT,
  Name CHAR(80) NOT NULL,
  Phone  CHAR(50),
  Address CHAR(50) NOT NULL,
  Email CHAR(50),
  DateOfBirth DATE NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Users (
  Id INT NOT NULL AUTO_INCREMENT,
  userName CHAR(30) NOT NULL,
  password CHAR(30) NOT NULL,
  name CHAR(80) NOT NULL,
  profile CHAR(15),
  PRIMARY KEY (id)
);

INSERT INTO Customers (Name, Phone, Address, Email, DateOfBirth) 
VALUES ('Erik Martinez', 6561134908, '283 monterrey', 'erik@outlook.com', '1999-02-14'),
('Luis Martinez', 6563413412, '100 cd juarez', 'luis@outlook.com', '1995-05-27');

INSERT INTO Users (userName, password, name, profile) 
VALUES ('admin', 'admin', 'Administrator', 'admin'),
('user', 'user', 'Normal User', 'user');

select * from Customers;
-- select * from Customers where Id = 2;

select * from Users;

/*Si sale el siguiente mensaje de error"Client does not support authentication
protocol requested by server; consider upgrading MySQL client" ejecute las
siguientes dos instrucciones*/

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Superviolin99!';
flush privileges;
