-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 16, 2019 at 12:40 PM
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
-- Table structure for table `tb_promotion`
--

CREATE TABLE `tb_promotion` (
  `promotion_code` varchar(100) NOT NULL,
  `menu_type_code` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `promotion_header` varchar(100) NOT NULL,
  `promotion_detail` varchar(1000) NOT NULL,
  `promotion_image` varchar(100) NOT NULL,
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

INSERT INTO `tb_promotion` (`promotion_code`, `menu_type_code`, `promotion_header`, `promotion_detail`, `promotion_image`, `startdate`, `enddate`, `adddate`, `lastupdate`, `updateby`, `addby`, `deleted`) VALUES
('PMT001', 'MNT01', 'ลดแหลกแจกแถม', 'ซื้อ1แถม1 ซื้อ2แถม5', '', '2019-12-10 ', '2019-12-28 ', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1', 0),
('PMT002', 'MNT02', 'ลด ลด ลด', 'เช็คอิน ลด 10%', '', '2019-12-10 ', '2019-12-28 ', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '', 0),
('PMT003', 'MNT01', 'ลด 5 บาท', 'นำแก้วมาเอง ลด 5 บาท', '', '2019-12-12', '2020-12-12', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1', 0),
('PMT004', 'MNT03', '2 แถม 1', 'ซื้อเค้ก 2 แถม 1 ชิ้น (เฉพาะทานที่ร้าน)', '', '2019-12-12', '2019-12-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_promotion`
--
ALTER TABLE `tb_promotion`
  ADD PRIMARY KEY (`promotion_code`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
