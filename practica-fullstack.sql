-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `laboratorio_fullstack`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `USUARIO`
--

CREATE TABLE `USUARIO` (
  `ID` int(11) NOT NULL,
  `NOMBRE` varchar(20) NOT NULL,
  `PRIMERAPELLIDO` varchar(20) NOT NULL,
  `SEGUNDOAPELLIDO` varchar(20) NOT NULL,
  `EMAIL` varchar(30) NOT NULL,
  `CONTRASEÑA` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `USUARIO`
--

INSERT INTO `USUARIO` (`ID`, `NOMBRE`, `PRIMERAPELLIDO`, `SEGUNDOAPELLIDO`, `EMAIL`, `CONTRASEÑA`) VALUES
(2, 'Mercy', 'Shyu', 'Barcel', 'mgrace.shyu@gmail.com', 'c0ntras3n@'),
(3, 'Elisa', 'Garcia', 'Perez', 'elisa_gp@gmail.com', 'p@ssw0rd123')
(4, 'Maria', 'Diaz', 'Fernandez', 'maria_df@gmail.com', 'p@ssw0rd123')
(5, 'Benjamin', 'Gonzalez', 'Melon', 'ben_gm@hotmail.com', 'c0ntr@sena')
(6, 'Sofia', 'Lopez', 'Torres', 'sof_lv@gmail.com', 'c0ntr@sena')
(7, 'Julian', 'Sanchez', 'Romero', 'julian_sr@gmail.com', 'c0ntr@s3n@')
(8, 'Verónica', 'Morales', 'Ruiz', 'vero_mr@hotmail.com', 'contrasen@123')

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `USUARIO`
--
ALTER TABLE `USUARIO`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `USUARIO`
--
ALTER TABLE `USUARIO`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
