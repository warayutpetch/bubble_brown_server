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
-- Table structure for table `tb_washing_machine_generation_program`
--

CREATE TABLE `tb_washing_machine_generation_program` (
  `program_code` varchar(45) NOT NULL,
  `program_name` varchar(45) NOT NULL,
  `program_price` varchar(45) NOT NULL,
  `description` varchar(100) NOT NULL,
  `program_time` varchar(50) NOT NULL,
  `washing_machine_generation_code` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_washing_machine_generation_program`
--

INSERT INTO `tb_washing_machine_generation_program` (`program_code`, `program_name`, `program_price`, `description`, `program_time`, `washing_machine_generation_code`) VALUES
('PG01', 'sports wear', '30', 'ชุดกีฬา', '45', 'WMG001'),
('PG02', 'cotton', '50', 'ผ้าฝ้าย', '50', 'WMG001'),
('PG03', 'Easy Care', '50', 'ผ้าที่ไม่ต้องรีด', '30', 'WMG001'),
('PG04', 'Cotton+', '50', 'ผ้าฝ้าย+', '50', 'WMG001'),
('PG05', 'Mix', '50', 'ผ้าทั่วไป', '40', 'WMG001'),
('PG06', 'Allergy Care', '80', 'ลดการเกิดภูมิแพ้', '40', 'WMG001'),
('PG07', 'Duvet', '50', 'ชุดเครื่องนอน', '90', 'WMG001'),
('PG08', 'Baby Steam Care', '80', 'ซักเสื้อผ้าเด็กด้วยไอน้ำร้อน', '90', 'WMG001'),
('PG09', 'Silent Wash', '50', 'ซักกลางคืน', '50', 'WMG001'),
('PG10', 'Dark Wash', '50', 'ผ้าสี', '40', 'WMG001'),
('PG11', 'Quick 30', '40', 'ซักด่วน 30 นาที', '30', 'WMG001'),
('PG12', 'Gentle Care', '80', 'ถนอมผ้า', '60', 'WMG001'),
('PG13', 'Stain Care', '60', 'ผ้าสกปรกมาก', '65', 'WMG001'),
('PG14', 'Download Cycle', '40', 'ล้าง + ปั่น', '45', 'WMG001');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_washing_machine_generation_program`
--
ALTER TABLE `tb_washing_machine_generation_program`
  ADD PRIMARY KEY (`program_code`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
