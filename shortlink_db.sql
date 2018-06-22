-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 22, 2018 at 04:19 PM
-- Server version: 10.1.22-MariaDB
-- PHP Version: 7.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shortlink_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'admin', 'password'),
(2, 'melon', 'melon');

-- --------------------------------------------------------

--
-- Table structure for table `shortlink_data`
--

CREATE TABLE `shortlink_data` (
  `id` int(11) NOT NULL,
  `shortlink` varchar(10) NOT NULL,
  `reallink` varchar(200) NOT NULL,
  `amount` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `shortlink_data`
--

INSERT INTO `shortlink_data` (`id`, `shortlink`, `reallink`, `amount`) VALUES
(1, 'kMbH0', 'facebook.com', 8),
(2, 'mh7X1', 'facebook.com', 0),
(3, 'Dn01t', 'facebook.com', 1),
(4, 'gP5VI', 'http://google.com', 62),
(5, '7SD5U', 'google.com', 0),
(6, 'UHzPi', 'google.com', 0),
(7, 'CkQcG', 'google.com', 0),
(8, '4XKIj', 'google.com', 1),
(9, 'xcqpM', 'google.co.th', 1),
(10, 'ppr0t', 'google.co.th', 2),
(11, 'lvGCz', 'google.com', 0),
(12, 'SzFa2', 'hello.com', 0),
(13, 'e7R9A', 'hello', 0),
(14, '8TJNc', 'hello', 0),
(15, 'LeA4g', 'hello', 0),
(16, '6FdOl', 'hello', 0),
(17, 'l9fsY', 'hello', 0),
(18, 'LbqRd', 'hello', 0),
(19, 'MxI7Q', 'google.co.th', 1),
(20, 'iNKr1', 'google.co.th', 0),
(21, 'qIHCH', 'google.co.th', 0),
(22, 'InlEJ', 'google.co.th', 1),
(23, 'Y6ram', 'google.com', 1),
(24, 'GKXZH', 'google.co.th', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shortlink_data`
--
ALTER TABLE `shortlink_data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `shortlink_data`
--
ALTER TABLE `shortlink_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
