-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 10, 2019 at 02:11 AM
-- Server version: 5.7.17-log
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `revelsoft_washing_machine`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_washing_machine_brand`
--

CREATE TABLE `tb_washing_machine_brand` (
  `washing_machine_brand_code` varchar(45) NOT NULL,
  `washing_machine_brand_name` varchar(45) NOT NULL,
  `washing_machine_brand_detail` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_washing_machine_brand`
--

INSERT INTO `tb_washing_machine_brand` (`washing_machine_brand_code`, `washing_machine_brand_name`, `washing_machine_brand_detail`) VALUES
('WMB001', 'LG', ''),
('WMB002', 'SHARP', ''),
('WMB003', 'SAMSUNG', ''),
('WMB004', 'ELECTROLUX', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_washing_machine_brand`
--
ALTER TABLE `tb_washing_machine_brand`
  ADD PRIMARY KEY (`washing_machine_brand_code`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
