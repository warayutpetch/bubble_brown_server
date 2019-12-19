-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 19, 2019 at 07:41 AM
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
-- Table structure for table `tb_promotion`
--

CREATE TABLE `tb_promotion` (
  `promotion_code` int(100) NOT NULL,
  `menu_type_code` varchar(100) NOT NULL,
  `promotion_header` varchar(100) NOT NULL,
  `promotion_detail` varchar(1000) NOT NULL,
  `promotion_image` varchar(100) NOT NULL,
  `promotion_type` varchar(100) NOT NULL,
  `discount_code` varchar(100) NOT NULL,
  `discount_percent` varchar(50) NOT NULL,
  `discount_price` varchar(50) NOT NULL,
  `startdate` varchar(50) NOT NULL,
  `enddate` varchar(50) NOT NULL,
  `adddate` datetime NOT NULL,
  `lastupdate` datetime NOT NULL,
  `updateby` varchar(100) NOT NULL,
  `addby` varchar(100) NOT NULL,
  `deleted` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_promotion`
--

INSERT INTO `tb_promotion` (`promotion_code`, `menu_type_code`, `promotion_header`, `promotion_detail`, `promotion_image`, `promotion_type`, `discount_code`, `discount_percent`, `discount_price`, `startdate`, `enddate`, `adddate`, `lastupdate`, `updateby`, `addby`, `deleted`) VALUES
(1, 'MNT01', 'ปีใหม่ 2020', 'ลด 20 บาท ทุกบิล', '', 'ส่วนลด', 'NEWYEAR20', '', '20', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1', 0),
(2, 'MNT01', 'ลดราคาวันแม่ 50 บาท', 'พาแม่มา ลดทันที 50 บาท', '', 'ส่วนลด', 'LOVEMOM', '', '50', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1', 0),
(4, 'MNT02', 'พาพ่อมา รับส่วนลด 15%', 'พาแม่มา ลดทันที 50 บาท', '', 'เปอร์เซ็น', 'DADDY15', '15', '', '2019-12-19T05:00:00.000Z', '2019-12-30T05:00:00.000Z', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_promotion`
--
ALTER TABLE `tb_promotion`
  ADD PRIMARY KEY (`promotion_code`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_promotion`
--
ALTER TABLE `tb_promotion`
  MODIFY `promotion_code` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
