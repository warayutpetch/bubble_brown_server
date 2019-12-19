-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 19, 2019 at 07:42 AM
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
-- Table structure for table `tb_user`
--

CREATE TABLE `tb_user` (
  `user_code` varchar(10) NOT NULL,
  `user_position` varchar(100) NOT NULL,
  `user_firstname` varchar(100) NOT NULL,
  `user_lastname` varchar(100) NOT NULL,
  `user_image` varchar(100) NOT NULL,
  `user_tel` varchar(10) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_address` varchar(1000) NOT NULL,
  `user_username` varchar(45) DEFAULT NULL,
  `user_password` varchar(45) DEFAULT NULL,
  `adddate` datetime NOT NULL,
  `lastupdate` datetime NOT NULL,
  `updateby` varchar(100) NOT NULL,
  `addby` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_user`
--

INSERT INTO `tb_user` (`user_code`, `user_position`, `user_firstname`, `user_lastname`, `user_image`, `user_tel`, `user_email`, `user_address`, `user_username`, `user_password`, `adddate`, `lastupdate`, `updateby`, `addby`) VALUES
('US001', 'แอดมิน', 'แพรวไพลิน', 'สาโรชวิมลสินธ์', 'undefined', '0902593586', 'praewpailin.qw@gmail.com', 'SUT', 'praewpailin', '12345678', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('US002', 'แอดมิน', 'จิดาภา', 'สุวรรณจันทร์', 'undefined', '0849583359', 'jidapa_pook@gmail.com', 'Suranaree University of Technology', 'pookie', '12345678', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('US003', 'แคชเชียร์', 'รถไฟฟ้า', 'อพาร์ทเม้น', 'undefined', '0816419337', 'rodfaifha@gmail.com', '13 ซอย อินทามระ 9\nสุทธิสาร', 'rodfaifha', '123456', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('US004', 'แอดมิน', 'อินทวา', 'จันทรครอบ', 'undefined', '0846161879', 'pimmm@gmail,con', 'SUT', 'pimpimpimm', '123456', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_user`
--
ALTER TABLE `tb_user`
  ADD PRIMARY KEY (`user_code`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
