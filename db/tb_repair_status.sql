-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 10, 2019 at 02:10 AM
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
-- Table structure for table `tb_repair_status`
--

CREATE TABLE `tb_repair_status` (
  `repair_status_code` varchar(45) NOT NULL,
  `repair_status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_repair_status`
--

INSERT INTO `tb_repair_status` (`repair_status_code`, `repair_status`) VALUES
('RPS01', 'แจ้งซ่อม'),
('RPS02', 'กำลังตรวจสอบ'),
('RPS03', 'กำลังซ่อม'),
('RPS04', 'ซ่อมเรียบร้อย');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_repair_status`
--
ALTER TABLE `tb_repair_status`
  ADD PRIMARY KEY (`repair_status_code`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
