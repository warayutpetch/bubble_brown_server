-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 26, 2019 at 07:57 PM
-- Server version: 8.0.17
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bubble_brown`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_customer`
--

CREATE TABLE `tb_customer` (
  `customer_code` varchar(20) NOT NULL,
  `customer_name` varchar(100) NOT NULL,
  `customer_id` varchar(100) NOT NULL,
  `customer_email` varchar(100) NOT NULL,
  `customer_tel` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `customer_image` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `deleted` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_customer`
--

INSERT INTO `tb_customer` (`customer_code`, `customer_name`, `customer_id`, `customer_email`, `customer_tel`, `customer_image`, `deleted`) VALUES
('CM001', 'นายมนศักดิ์  กางมุ้งคอย', 'monsakza', 'monsakza@hotmail.com', '0924594785', '0be6eed8-9d5a-4a83-80ea-50761e4174d9.png', 0),
('CM002', 'นางนารัตน์  พัดลม', 'narattt', 'naratfan@gmail.com', '0902593586', 'a2c771af-60f7-40c0-98e2-0387ab5d7113.png', 0),
('CM003', 'นายนนนที ปล้ำกะโทก', 'nonnonnn', 'nonnonzaza@gmail.com', '0841235896', 'c647d419-b587-4a66-985e-6534b0d18fbe.png', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_customer`
--
ALTER TABLE `tb_customer`
  ADD PRIMARY KEY (`customer_code`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
