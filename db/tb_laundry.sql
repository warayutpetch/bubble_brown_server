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
-- Table structure for table `tb_laundry`
--

CREATE TABLE `tb_laundry` (
  `laundry_code` varchar(20) NOT NULL COMMENT '''ร้านค้าโค้ด''',
  `entrepreneur_code` varchar(20) NOT NULL COMMENT '''ผู้ประกอบการ''',
  `laundry_name_th` varchar(45) DEFAULT NULL COMMENT '''ชื่อร้านค้าภาษาไทย''',
  `laundry_name_en` varchar(45) DEFAULT NULL COMMENT '''ชื่อร้านค้าภาษาอังกฤษ''',
  `laundry_tel` varchar(45) DEFAULT NULL,
  `laundry_img` varchar(200) NOT NULL,
  `laundry_open` varchar(45) NOT NULL,
  `district_id` int(11) DEFAULT NULL COMMENT '''ตำบล''',
  `amphur_id` int(11) DEFAULT NULL COMMENT '''อำเภอ''',
  `province_id` int(11) DEFAULT NULL COMMENT '''จังหวัด''',
  `user_zipcode` varchar(45) DEFAULT NULL COMMENT '''รหัสไปรษณีย์''',
  `addby` varchar(45) DEFAULT NULL COMMENT '''เพิ่มข้อมูลโดย''',
  `adddate` datetime DEFAULT NULL COMMENT '''วันที่เพิ่ม''',
  `updateby` varchar(45) DEFAULT NULL COMMENT '''เเก้ไขข้อมูลโดย''',
  `lastupdate` datetime DEFAULT NULL COMMENT '''วันที่เเก้ไข'''
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_laundry`
--

INSERT INTO `tb_laundry` (`laundry_code`, `entrepreneur_code`, `laundry_name_th`, `laundry_name_en`, `laundry_tel`, `laundry_img`, `laundry_open`, `district_id`, `amphur_id`, `province_id`, `user_zipcode`, `addby`, `adddate`, `updateby`, `lastupdate`) VALUES
('LD0001', 'EP0001', 'ร้านคุณป้าซักผ้า', 'ร้านคุณป้าซักผ้า', '044-53658', 'laundry//27761b79-f079-40a4-9ebf-e471b8bf3dc5.jpeg', '10:00 - 19:00 น.', 7274, 809, 58, '10300', NULL, NULL, 'A0002', '2019-09-25 14:49:13'),
('LD0003', 'EP0002', 'WashXpress', 'WashXpress', '', '', '09:00 - 22.00 น.', 7761, 853, 63, '80260', NULL, NULL, 'A0002', '2019-09-25 14:40:46'),
('LD0004', 'EP0002', 'Super wash 24 Hours', 'Super wash 24 Hours', '', '', '10:00 - 19:00 น.', 7274, 809, 58, '73120', NULL, NULL, 'A0002', '2019-09-25 14:40:58'),
('LD0005', 'EP0002', 'เรื่องผ้าไว้ใจเรา', 'The fabric trust us', '099999999', 'LD0005.jpg', '08:00 - 00.00 น.', 88, 12, 1, '10120', 'A0002', '2019-09-18 15:33:43', 'A0002', '2019-09-23 10:43:22'),
('LD0006', 'EP0001', 'บ้านซักผ้าฟองเบียร์', 'บ้านซักผ้าฟองเบียร์', '044-001-494', 'laundry//fb509018-40b6-4a8c-80e4-7b20a6d30147.jpeg', '08:00 - 00.00 น.', 1760, 215, 19, '30000', 'A0001', '2019-09-24 14:22:30', 'A0001', '2019-09-24 14:23:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_laundry`
--
ALTER TABLE `tb_laundry`
  ADD PRIMARY KEY (`laundry_code`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
