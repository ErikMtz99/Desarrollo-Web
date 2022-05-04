--
-- Creación de base de datos `eshop` 
--

CREATE DATABASE testDb;

--
-- Seleccionar la base de datos a usar 
--

USE testDb;

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE dbo.Customers (
  `Id` int(10) UNSIGNED NOT NULL,
  `Name` varchar(80) NOT NULL,
  `Phone` varchar(15) NOT NULL,
  `Address` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `DateOfBirth` datetime NOT NULL
) DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO dbo.Customers (`Id`, `Name`, `Phone`, `Address`, `Email`, `DateOfBirth`) VALUES
(1, 'Erik', 6561134908, 'monterrey', 'erik@outlook.com', '2018-10-22 00:00:00');


-- ALTER TABLE dbo.Customers
--  ADD PRIMARY KEY (`Id`),
 -- ADD KEY `category_parent` (`id_parent`),
 -- ADD KEY `level_depth` (`level_depth`);

ALTER TABLE dbo.Customers
MODIFY `Id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3388;