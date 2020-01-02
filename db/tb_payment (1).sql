-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 02, 2020 at 07:30 AM
-- Server version: 5.7.17-log
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
-- Table structure for table `tb_payment`
--

CREATE TABLE `tb_payment` (
  `payment_id` int(11) NOT NULL,
  `order_code` varchar(20) NOT NULL,
  `promotion_code` varchar(20) NOT NULL,
  `customer_code` varchar(20) NOT NULL,
  `payment_discount` varchar(20) NOT NULL COMMENT 'ส่วนลดที่ได้รับ',
  `payment_sum` varchar(20) NOT NULL COMMENT 'รวมทั้งหมดรวมส่วนลดแล้ว',
  `payment_money_received` varchar(20) NOT NULL COMMENT 'เงินที่ได้รับ',
  `payment_change` varchar(20) NOT NULL COMMENT 'เงินทอน',
  `payment_date` varchar(50) NOT NULL,
  `payment_time` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_payment`
--

INSERT INTO `tb_payment` (`payment_id`, `order_code`, `promotion_code`, `customer_code`, `payment_discount`, `payment_sum`, `payment_money_received`, `payment_change`, `payment_date`, `payment_time`) VALUES
(7, 'OD000001', '', '', '', '45', '1000', '955', '', ''),
(8, 'OD000002', '', '', '', '45', '1000', '955', '', ''),
(9, 'OD000001', '', '', '', '45', '1000', '955', '', ''),
(10, 'OD000002', '', '', '', '45', '1000', '955', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_payment`
--
ALTER TABLE `tb_payment`
  ADD PRIMARY KEY (`payment_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_payment`
--
ALTER TABLE `tb_payment`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
