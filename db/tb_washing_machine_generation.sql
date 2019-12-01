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
-- Table structure for table `tb_washing_machine_generation`
--

CREATE TABLE `tb_washing_machine_generation` (
  `washing_machine_generation_code` varchar(45) NOT NULL,
  `washing_machine_generation_name` varchar(45) NOT NULL,
  `washing_machine_brand_code` varchar(45) NOT NULL,
  `washing_machine_type_code` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_washing_machine_generation`
--

INSERT INTO `tb_washing_machine_generation` (`washing_machine_generation_code`, `washing_machine_generation_name`, `washing_machine_brand_code`, `washing_machine_type_code`) VALUES
('WMG001', 'FC1409S4W', 'WMB001', 'MT01'),
('WMG002', 'FC1408S4W', 'WMB001', 'MT01'),
('WMG003', 'RC9066A3F', 'WMB001', 'MT01'),
('WMG004', 'TH2518SSAV', 'WMB001', 'MT01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_washing_machine_generation`
--
ALTER TABLE `tb_washing_machine_generation`
  ADD PRIMARY KEY (`washing_machine_generation_code`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
