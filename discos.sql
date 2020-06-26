-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Temps de generació: 26-06-2020 a les 16:20:43
-- Versió del servidor: 10.4.11-MariaDB
-- Versió de PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de dades: `discos`
--

-- --------------------------------------------------------

--
-- Estructura de la taula `formulari`
--

CREATE TABLE `formulari` (
  `data` date NOT NULL DEFAULT current_timestamp(),
  `nom` text NOT NULL,
  `email` text NOT NULL,
  `comentaris` text NOT NULL,
  `edat` int(11) NOT NULL,
  `disc` int(11) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Bolcament de dades per a la taula `formulari`
--

INSERT INTO `formulari` (`data`, `nom`, `email`, `comentaris`, `edat`, `disc`, `id`) VALUES
('2020-06-26', 'Joan', 'joanpoubaez@gmail.com', 'primer test', 44, 14, 8);

--
-- Índexs per a les taules bolcades
--

--
-- Índexs per a la taula `formulari`
--
ALTER TABLE `formulari`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per les taules bolcades
--

--
-- AUTO_INCREMENT per la taula `formulari`
--
ALTER TABLE `formulari`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
