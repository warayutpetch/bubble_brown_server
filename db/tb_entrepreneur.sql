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
-- Table structure for table `tb_entrepreneur`
--

CREATE TABLE `tb_entrepreneur` (
  `entrepreneur_code` varchar(20) NOT NULL COMMENT 'ผู้ประกอบการ',
  `entrepreneur_name_th` varchar(45) DEFAULT NULL COMMENT 'ชื่อผู้ประกอบการไทย',
  `entrepreneur_name_en` varchar(45) DEFAULT NULL COMMENT '''ชื่อผู้ประกอบการอังกฤษ''',
  `entrepreneur_username` varchar(45) DEFAULT NULL COMMENT '''ชื่อผู้ใช้งานผู้ประกอบการ''',
  `entrepreneur_password` varchar(45) DEFAULT NULL COMMENT '''รหัสผ่นผู้ประกอบการ''',
  `entrepreneur_tel` varchar(45) DEFAULT NULL COMMENT '''เบอร์ผู้ประกอบการ''',
  `entrepreneur_email` varchar(45) DEFAULT NULL COMMENT '''email ผู้ประกอบการ''',
  `entrepreneur_address` varchar(200) DEFAULT NULL COMMENT '''ที่อยู่ผู้ประกอบการ''',
  `entrepreneur_img` varchar(200) DEFAULT NULL COMMENT '''รูปผู้ประกอบการ''',
  `district_id` int(11) DEFAULT NULL COMMENT '''ตำบล''',
  `amphur_id` int(11) DEFAULT NULL COMMENT '''อำเภอ''',
  `province_id` int(11) DEFAULT NULL COMMENT '''จังหวัด''',
  `user_zipcode` varchar(45) DEFAULT NULL COMMENT '''รหัสไปรษณีย์''',
  `addby` varchar(45) NOT NULL,
  `adddate` datetime NOT NULL,
  `updateby` varchar(45) NOT NULL,
  `lastupdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_entrepreneur`
--

INSERT INTO `tb_entrepreneur` (`entrepreneur_code`, `entrepreneur_name_th`, `entrepreneur_name_en`, `entrepreneur_username`, `entrepreneur_password`, `entrepreneur_tel`, `entrepreneur_email`, `entrepreneur_address`, `entrepreneur_img`, `district_id`, `amphur_id`, `province_id`, `user_zipcode`, `addby`, `adddate`, `updateby`, `lastupdate`) VALUES
('EP0001', 'Revelsoft', 'เรเวลซอฟต์', 'revelsoft', 'revelnw', '044-5286', 'revelsoft@co.th', '271/55 ตรอกวัดท่าตะโก', 'entrepreneur//1d2d45c3-9fb2-40fb-8353-971474934cb5.jpeg', 1760, 215, 19, '30000', '', '0000-00-00 00:00:00', 'A0001', '2019-09-24 16:33:26'),
('EP0002', 'Adler (Thailand) Company Limited', 'แอดเลอร์ ', 'adler', '123444', '02-586935', 'Adler@gmail.comm', '88/1 Khwaeng Nuanchan, Khet Bueng Kum', 'EP0002_20199251569386419141.jpg', 88, 12, 1, '10120', '', '0000-00-00 00:00:00', 'A0002', '2019-09-25 11:40:19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_entrepreneur`
--
ALTER TABLE `tb_entrepreneur`
  ADD PRIMARY KEY (`entrepreneur_code`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
