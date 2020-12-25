-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le :  ven. 25 déc. 2020 à 23:16
-- Version du serveur :  8.0.18
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `techtest`
--

-- --------------------------------------------------------

--
-- Structure de la table `tech`
--

DROP TABLE IF EXISTS `tech`;
CREATE TABLE IF NOT EXISTS `tech` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `liste` varchar(24) DEFAULT NULL,
  `ordre` int(11) DEFAULT NULL,
  `listetri` varchar(24) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=ascii;

--
-- Déchargement des données de la table `tech`
--

INSERT INTO `tech` (`id`, `liste`, `ordre`, `listetri`) VALUES
(1, '[1,5,4,6,2]', 1, '[1,2,4,5,6]'),
(2, '[1,10,9,4,2]', 2, '[10,9,4,2,1]'),
(3, '[1,5,8,4,2]', 1, '[1,2,4,5,8]'),
(25, '[15,44,5,6,8]', 1, '[5,6,8,15,44]'),
(26, '[23,21,46,894,12]', 2, '[894,46,23,21,12]'),
(27, '[2,155,2302,123,5]', 2, '[2302,155,123,5,2]');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
