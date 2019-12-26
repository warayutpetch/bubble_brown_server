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
  `addby` varchar(100) NOT NULL,
  `deleted` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_user`
--

INSERT INTO `tb_user` (`user_code`, `user_position`, `user_firstname`, `user_lastname`, `user_image`, `user_tel`, `user_email`, `user_address`, `user_username`, `user_password`, `adddate`, `lastupdate`, `updateby`, `addby`, `deleted`) VALUES
('US001', 'แอดมิน', 'แพรวไพลิน', 'สาโรชวิมลสินธ์', '45dc5a1a-f52f-4bc5-862e-96cb923d8ea7.png', '0902593586', 'praewpailin.qw@gmail.com', 'SUT', 'praewpailin', '12345678', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'undefined', '', 0),
('US002', 'พนักงานเสิร์ฟ', 'จิดาภา', 'สุวรรณจันทร์', '27e037c1-e3d2-4ac6-8a5a-c5b32da41b24.png', '0849583359', 'jidapa_pook@gmail.com', 'Suranaree University of Technology', 'pookie', '12345678', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'undefined', '', 0),
('US003', 'แคชเชียร์', 'อินทวา', 'จันทรครอบ', 'ae276df0-bfba-4d19-99b7-94c4319c501b.png', '0846161879', 'pimmm@gmail,con', 'SUT', 'pimpimpimm', '123456', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'undefined', '', 0);

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
