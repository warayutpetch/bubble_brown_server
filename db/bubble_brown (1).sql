-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 16, 2019 at 12:44 PM
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
-- Table structure for table `tb_admin`
--

CREATE TABLE `tb_admin` (
  `admin_code` varchar(30) NOT NULL,
  `admin_prefix` varchar(15) NOT NULL,
  `admin_name` varchar(45) DEFAULT NULL,
  `admin_lastname` varchar(45) DEFAULT NULL,
  `admin_email` varchar(45) DEFAULT NULL,
  `admin_mobile` varchar(45) DEFAULT NULL,
  `admin_username` varchar(45) DEFAULT NULL,
  `admin_password` varchar(45) DEFAULT NULL,
  `admin_img` varchar(45) NOT NULL,
  `district_id` int(11) DEFAULT NULL,
  `amphur_id` int(11) DEFAULT NULL,
  `province_id` int(11) DEFAULT NULL,
  `admin_zipcode` varchar(45) DEFAULT NULL,
  `addby` varchar(45) DEFAULT NULL,
  `adddate` datetime DEFAULT NULL,
  `updateby` varchar(45) DEFAULT NULL,
  `lastupdate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_admin`
--

INSERT INTO `tb_admin` (`admin_code`, `admin_prefix`, `admin_name`, `admin_lastname`, `admin_email`, `admin_mobile`, `admin_username`, `admin_password`, `admin_img`, `district_id`, `amphur_id`, `province_id`, `admin_zipcode`, `addby`, `adddate`, `updateby`, `lastupdate`) VALUES
('A0001', 'นาย', 'ADMIN', 'ADMIN', 'revelsoft@co.th', '', 'admin', 'e10adc3949ba59abbe56e057f20f883e', 'undefined', 0, 0, 0, '81000', NULL, NULL, 'A0001', '2019-12-11 19:58:07'),
('A0002', 'นาย', 'อัษฎาวุธ', 'อุดมพันธ์', 'atsadawut24@gmail.com', '0879526851', 'atsadawut', '6d3c11520994ae696a763e75c8542619', 'A0002_20199251569384611405.jpg', 4623, 509, 33, '45140 ', 'A0001', '2019-09-10 09:53:46', 'A0002', '2019-09-25 15:47:27');

-- --------------------------------------------------------

--
-- Table structure for table `tb_booking`
--

CREATE TABLE `tb_booking` (
  `booking_code` varchar(20) NOT NULL,
  `table_code` varchar(10) NOT NULL,
  `booking_firstname` varchar(100) NOT NULL,
  `booking_lastname` varchar(100) NOT NULL,
  `booking_tel` varchar(10) NOT NULL,
  `booking_amount` int(10) NOT NULL,
  `booking_email` varchar(100) NOT NULL,
  `booking_date` varchar(50) NOT NULL,
  `booking_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_booking`
--

INSERT INTO `tb_booking` (`booking_code`, `table_code`, `booking_firstname`, `booking_lastname`, `booking_tel`, `booking_amount`, `booking_email`, `booking_date`, `booking_time`) VALUES
('BK000001', 'T02', 'inthawa', 'chandharakrob', '0981013056', 2, 'revelsoft@co.th', '2019-12-13', '00:00:00'),
('BK000002', 'T02', 'inthawa', 'chandharakrob', '0981013056', 2, 'revelsoft@co.th', '2019-12-13', '00:00:00'),
('BK000003', 'T04', 'inthawa', 'chandharakrob', '0981013056', 2, 'revelsoft@co.th', '2019-12-13', '00:00:00'),
('BK000004', 'T02', 'inthawa', 'chandharakrob', '0981013056', 2, 'Adler@gmail.com', '2019-12-15', '00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tb_cancel_list`
--

CREATE TABLE `tb_cancel_list` (
  `cencel_list_code` varchar(10) NOT NULL,
  `cencel_list_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_cancel_list`
--

INSERT INTO `tb_cancel_list` (`cencel_list_code`, `cencel_list_name`) VALUES
('', ''),
('CN01', 'ออเดอร์ช้า'),
('CN02', 'ออเดอร์ผิด'),
('CN3', 'สินค้าหมด');

-- --------------------------------------------------------

--
-- Table structure for table `tb_customer`
--

CREATE TABLE `tb_customer` (
  `customer_code` varchar(20) NOT NULL,
  `customer_name` varchar(100) NOT NULL,
  `customer_id` varchar(100) NOT NULL,
  `customer_email` varchar(100) NOT NULL,
  `customer_phone` varchar(10) NOT NULL,
  `customer_img` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_customer`
--

INSERT INTO `tb_customer` (`customer_code`, `customer_name`, `customer_id`, `customer_email`, `customer_phone`, `customer_img`) VALUES
('', '', 'undefined', 'undefined', '', 'undefined'),
('CM001', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tb_menu`
--

CREATE TABLE `tb_menu` (
  `menu_code` varchar(10) NOT NULL,
  `menu_id` int(10) NOT NULL,
  `menu_type_code` varchar(10) NOT NULL,
  `menu_name` varchar(100) NOT NULL,
  `menu_image` varchar(100) NOT NULL,
  `menu_price` varchar(100) NOT NULL,
  `adddate` datetime NOT NULL,
  `lastupdate` datetime NOT NULL,
  `updateby` varchar(100) NOT NULL,
  `addby` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_menu`
--

INSERT INTO `tb_menu` (`menu_code`, `menu_id`, `menu_type_code`, `menu_name`, `menu_image`, `menu_price`, `adddate`, `lastupdate`, `updateby`, `addby`) VALUES
('MN01001', 1, 'MNT01', 'เอสเปรสโซ่ (ร้อน)', '', '45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1'),
('MN01002', 2, 'MNT01', 'เอสเปรสโซ่ (เย็น)', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1'),
('MN01003', 3, 'MNT01', 'เอสเปรสโซ่ (ปั่น)', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1'),
('MN010038', 38, 'MNT01', 'ดาร์คช็อกโกแลต (เย็น)', '', '70', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01004', 4, 'MNT01', 'คาปูชิโน (ร้อน)', '', '45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1'),
('MN01005', 5, 'MNT01', 'คาปูชิโน (เย็น)', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1'),
('MN01006', 6, 'MNT01', 'คาปูชิโน (ปั่น)', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1'),
('MN01007', 7, 'MNT01', 'มอคค่า (ร้อน)', '', '45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01008', 8, 'MNT01', 'มอคค่า (เย็น)', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01009', 9, 'MNT01', 'มอคค่า (ปั่น)', '', '70', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01010', 10, 'MNT01', 'ไวท์ ช็อก มัคคิอาโต้ (ร้อน)', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01011', 11, 'MNT01', 'ไวท์ ช็อก มัคคิอาโต้า (เย็น)', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01012', 12, 'MNT01', 'ไวท์ ช็อก มัคคิอาโต้า (ปั่น)', '', '80', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01013', 13, 'MNT01', 'ลาเต้ (ร้อน)', '', '45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01014', 14, 'MNT01', 'ลาเต้ (เย็น)', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01015', 15, 'MNT01', 'ลาเต้ (ปั่น)', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01016', 16, 'MNT01', 'อเมริกาโน่ (ร้อน)', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01017', 17, 'MNT01', 'อเมริกาโน่ (เย็น)', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01018', 18, 'MNT01', 'ชา (ร้อน)', '', '45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01019', 19, 'MNT01', 'ชาเขียวนม (ร้อน)', '', '45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01020', 20, 'MNT01', 'ชาเขียวนม (เย็น)', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01021', 21, 'MNT01', 'ชาเขียวนม (ปั่น)', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01022', 22, 'MNT01', 'ชาไทย (ร้อน)', '', '45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01023', 23, 'MNT01', 'ชาไทย (เย็น)', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01024', 24, 'MNT01', 'ชาไทย (ปั่น)', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01025', 25, 'MNT01', 'ชานม (ร้อน)', '', '45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01026', 26, 'MNT01', 'ชานม (เย็น)', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01027', 27, 'MNT01', 'ชานม (ปั่น)', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01028', 28, 'MNT01', 'ชามะนาว (เย็น)', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01029', 29, 'MNT01', 'ดาร์คช็อกโกแลต (เย็น)', '', '70', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01030', 30, 'MNT01', 'สตรอเบอร์รี่ชีสเค้ก (เย็น)', '', '70', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01031', 32, 'MNT01', 'นมสด (ร้อน)', '', '45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01033', 33, 'MNT01', 'นมสด (เย็น)', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01034', 34, 'MNT01', 'นมสด (ปั่น)', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01035', 35, 'MNT01', 'ช็อกโกแลต (ร้อน)', '', '45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01036', 36, 'MNT01', 'ช็อกโกแลต (เย็น)', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01037', 37, 'MNT01', 'ช็อกโกแลต (ปั่น)', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN02001', 38, 'MNT02', 'สปาเก็ตตี้ซอสมะเขือ', '', '105', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN02002', 39, 'MNT02', 'สปาเก็ตตี้แฮมพริกแห้ง', '', '120', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN02003', 40, 'MNT02', 'ซีซ่าสลัด', '', '95', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN02004', 41, 'MNT02', 'พิซซ่าฮาวาเอี้ยน', '', '115', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN02005', 42, 'MNT02', 'ปีกไก่ทอด', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN02006', 43, 'MNT02', 'เฟรนช์ฟรายส์', '', '45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN03001', 44, 'MNT03', 'เค้กสตอเบอรี่ ', '', '60', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN03002', 45, 'MNT03', 'เค้กส้ม', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN03003', 46, 'MNT03', 'บลูเบอรี่ชีสเค้ก ', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN03004', 47, 'MNT03', 'บานอฟฟี่', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN03005', 48, 'MNT03', 'เครปเค้กเรนโบว์ ', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN03006', 49, 'MNT03', 'เค้กช้อกโกแลต', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN03007', 50, 'MNT03', 'เอแคลร์', '', '45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tb_menu_type`
--

CREATE TABLE `tb_menu_type` (
  `menu_type_code` varchar(10) NOT NULL,
  `menu_type_id` varchar(10) NOT NULL,
  `menu_type_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_menu_type`
--

INSERT INTO `tb_menu_type` (`menu_type_code`, `menu_type_id`, `menu_type_name`) VALUES
('MNT01', '1', 'เครื่องดื่ม'),
('MNT02', '2', 'อาหาร'),
('MNT03', '3', 'เบเกอร์รี่');

-- --------------------------------------------------------

--
-- Table structure for table `tb_order`
--

CREATE TABLE `tb_order` (
  `order_code` varchar(50) NOT NULL,
  `customer_code` varchar(50) NOT NULL,
  `table_code` varchar(10) NOT NULL,
  `order_date` varchar(50) DEFAULT NULL,
  `order_due_date` varchar(50) DEFAULT NULL,
  `order_total_price` double NOT NULL,
  `order_vat` int(11) NOT NULL,
  `order_vat_type` int(11) NOT NULL,
  `order_vat_price` double NOT NULL,
  `order_net_price` double NOT NULL,
  `order_remark` varchar(200) NOT NULL,
  `order_status` varchar(50) NOT NULL,
  `addby` varchar(50) NOT NULL,
  `adddate` datetime DEFAULT NULL,
  `updateby` varchar(50) NOT NULL,
  `lastupdate` datetime DEFAULT NULL,
  `order_service` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_order`
--

INSERT INTO `tb_order` (`order_code`, `customer_code`, `table_code`, `order_date`, `order_due_date`, `order_total_price`, `order_vat`, `order_vat_type`, `order_vat_price`, `order_net_price`, `order_remark`, `order_status`, `addby`, `adddate`, `updateby`, `lastupdate`, `order_service`) VALUES
('OD000001', 'CM001', '01', '201912131576218780394', NULL, 220, 0, 0, 0, 0, '', '', '', NULL, '', NULL, ''),
('OD000002', 'CM001', 'undefined', '201912131576178016438', NULL, 495, 0, 0, 0, 0, '', '', '', NULL, '', NULL, ''),
('OD000003', 'CM001', 'undefined', '201912131576178108184', NULL, 270, 0, 0, 0, 0, '', '', '', NULL, '', NULL, ''),
('OD000004', 'CM001', '01', '201912131576178297008', NULL, 520, 0, 0, 0, 0, '', '', '', NULL, '', NULL, ''),
('OD000005', 'CM001', '01', '201912131576220922243', NULL, 420, 0, 0, 0, 0, '', '', '', NULL, '', NULL, 'ทานที่ร้าน'),
('OD000006', 'CM001', '01', '201912131576222308840', NULL, 455, 0, 0, 0, 0, '', '', '', NULL, '', NULL, 'ทานที่ร้าน');

-- --------------------------------------------------------

--
-- Table structure for table `tb_order_cencel`
--

CREATE TABLE `tb_order_cencel` (
  `order_cencel_code` varchar(20) NOT NULL COMMENT 'รหัสยกเลิกออเดอร์',
  `cencel_list_code` varchar(20) NOT NULL COMMENT 'เหตุผลยกเลิก',
  `order_code` varchar(20) NOT NULL,
  `addby` varchar(50) NOT NULL,
  `adddate` datetime NOT NULL,
  `updateby` varchar(50) NOT NULL,
  `lastupdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_order_cencel`
--

INSERT INTO `tb_order_cencel` (`order_cencel_code`, `cencel_list_code`, `order_code`, `addby`, `adddate`, `updateby`, `lastupdate`) VALUES
('', '', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tb_order_list`
--

CREATE TABLE `tb_order_list` (
  `order_list_code` int(100) NOT NULL,
  `order_code` varchar(50) NOT NULL,
  `menu_code` varchar(20) NOT NULL,
  `order_list_name` varchar(200) NOT NULL,
  `order_list_qty` int(11) NOT NULL,
  `order_list_price_qty` double NOT NULL,
  `order_list_price_sum_qty` double NOT NULL,
  `order_list_price_sum` double NOT NULL,
  `order_list_remark` text NOT NULL,
  `addby` varchar(50) NOT NULL,
  `adddate` datetime NOT NULL,
  `updateby` varchar(50) NOT NULL,
  `lastupdate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_order_list`
--

INSERT INTO `tb_order_list` (`order_list_code`, `order_code`, `menu_code`, `order_list_name`, `order_list_qty`, `order_list_price_qty`, `order_list_price_sum_qty`, `order_list_price_sum`, `order_list_remark`, `addby`, `adddate`, `updateby`, `lastupdate`) VALUES
(110, 'OD000002', 'MN01001', 'กาแฟ', 2, 100, 200, 495, '', '', '0000-00-00 00:00:00', '', NULL),
(111, 'OD000002', 'MN01002', 'ลาเต้', 2, 120, 240, 495, '', '', '0000-00-00 00:00:00', '', NULL),
(112, 'OD000002', 'MN03002', 'เค๊กส้ม', 1, 55, 55, 495, '', '', '0000-00-00 00:00:00', '', NULL),
(113, 'OD000003', 'MN02001', 'ข้าวผัด', 1, 70, 70, 270, '', '', '0000-00-00 00:00:00', '', NULL),
(114, 'OD000003', 'MN02002', 'กุ้งชุบแป้งทอด', 1, 200, 200, 270, '', '', '0000-00-00 00:00:00', '', NULL),
(122, 'OD000004', 'MN02001', 'ข้าวผัด', 3, 70, 210, 520, '', '', '0000-00-00 00:00:00', '', NULL),
(123, 'OD000004', 'MN03002', 'เค๊กส้ม', 2, 55, 110, 520, '', '', '0000-00-00 00:00:00', '', NULL),
(124, 'OD000004', 'MN02002', 'กุ้งชุบแป้งทอด', 1, 200, 200, 520, '', '', '0000-00-00 00:00:00', '', NULL),
(128, 'OD000001', 'MN01001', 'กาแฟ', 1, 100, 100, 220, '', '', '0000-00-00 00:00:00', '', NULL),
(129, 'OD000001', 'MN01002', 'ลาเต้', 1, 120, 120, 220, '', '', '0000-00-00 00:00:00', '', NULL),
(130, 'OD000005', 'MN01001', 'กาแฟ', 3, 100, 300, 420, '', '', '0000-00-00 00:00:00', '', NULL),
(131, 'OD000005', 'MN01002', 'ลาเต้', 1, 120, 120, 420, '', '', '0000-00-00 00:00:00', '', NULL),
(134, 'OD000006', 'MN03002', 'เค๊กส้ม', 5, 55, 275, 455, '', '', '0000-00-00 00:00:00', '', NULL),
(135, 'OD000006', 'MN03001', 'เค๊กหน้านิ่ม', 1, 60, 60, 455, '', '', '0000-00-00 00:00:00', '', NULL),
(136, 'OD000006', 'MN01002', 'ลาเต้', 1, 120, 120, 455, '', '', '0000-00-00 00:00:00', '', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tb_product`
--

CREATE TABLE `tb_product` (
  `product_code` varchar(50) NOT NULL COMMENT 'รหัสอ้างอิงสินค้า',
  `product_type_code` varchar(50) NOT NULL COMMENT 'ประเภทสินค้า',
  `product_name` varchar(100) NOT NULL COMMENT 'ชื่อสินค้า',
  `product_brand_name` varchar(100) NOT NULL,
  `product_minimum` varchar(10) NOT NULL,
  `product_price` varchar(20) NOT NULL,
  `product_cost` varchar(20) NOT NULL,
  `product_description` varchar(200) NOT NULL COMMENT 'รายละเอียดสินค้า',
  `product_image` varchar(200) NOT NULL COMMENT 'รูปสินค้า',
  `addby` varchar(50) NOT NULL,
  `adddate` datetime NOT NULL,
  `updateby` varchar(50) NOT NULL,
  `lastupdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_product`
--

INSERT INTO `tb_product` (`product_code`, `product_type_code`, `product_name`, `product_brand_name`, `product_minimum`, `product_price`, `product_cost`, `product_description`, `product_image`, `addby`, `adddate`, `updateby`, `lastupdate`) VALUES
('PT1001', 'PTY01', 'เครื่องบดกาแฟ', '', '', '26500', '', '', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT1002', 'PTY01', 'เครื่องชงกาแฟ', '', '', '38900', '', '', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT1003', 'PTY01', 'เครื่องปั่น', '', '', '14900', '', '', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2001', 'PTY02', 'เมล็ดกาแฟอาราบิก้า', '', '2', '600', '', '1,000 กรัม', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2002', 'PTY02', 'โกโก้', '', '2', '250', '', '500 กรัม', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2003', 'PTY02', 'ชาเขียวมัทฉะ', '', '2', '200', '', '100 กรัม', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2004', 'PTY02', 'ชาไทย', '', '2', '150', '', '100 กรัม', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2005', 'PTY02', 'ชา', '', '2', '260', '', '500 กรัม', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2006', 'PTY02', 'ชามะนาว', '', '2', '150', '', '1000 กรัม', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2007', 'PTY02', 'น้ำเชื่อมกลิ่นวนิลา', '', '2', '240', '', '', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2008', 'PTY02', 'น้ำเชื่อมกลิ่นคาราเมล', '', '2', '240', '', '', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2009', 'PTY02', 'ไซรัปกลิ่น วนิลา', '', '2', '425', '', '', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2010', 'PTY02', 'ไซรัปกลิ่น คาราเมล', '', '2', '452', '', '', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2011', 'PTY02', 'ไวท์ช็อคโกแลต', '', '2', '600', '', '', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2012', 'PTY02', 'ทีรามิสุ', '', '2', '950', '', '', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2013', 'PTY02', 'คาราเมล', '', '2', '600', '', '', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2014', 'PTY02', 'ช้อกโกแลต', '', '2', '250', '', '', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2015', 'PTY02', 'น้ำตาล', '', '2', '90', '', '', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2016', 'PTY02', 'นมข้นหวาน', '', '2', '112', '', '2 กก. / ถุง', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2017', 'PTY02', 'คาร์เนชัน', '', '5', '23', '', '', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2018', 'PTY02', 'น้ำเปล่าถัง', '', '5', '30', '', '', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2019', 'PTY02', 'นมสดพาสเจอร์ไรส์ รสจืด', '', '5', '154', '', '2 ลิตร /1 แกรอน', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT3001', 'PTY03', 'แก้ว 22 ออนซ์', '', '', '95', '', '', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT3002', 'PTY03', 'แก้ว 16 ออนซ์', '', '', '85', '', '', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT3003', 'PTY03', 'แก้วกาแฟร้อน', '', '', '', '', '', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT3004', 'PTY03', 'หลอด', '', '', '30', '', '', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT3005', 'PTY03', 'หลอดปลายช้อน', '', '', '30', '', '', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT3006', 'PTY03', 'หลอดกาแฟ', '', '', '45', '', '', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT3007', 'PTY03', 'ฝาโดม', '', '', '70', '', '', '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tb_product_supplier`
--

CREATE TABLE `tb_product_supplier` (
  `product_code` varchar(50) NOT NULL,
  `supplier_code` varchar(50) NOT NULL,
  `product_buyprice` double NOT NULL,
  `addby` varchar(50) NOT NULL,
  `adddate` datetime NOT NULL,
  `updateby` varchar(50) NOT NULL,
  `lastupdate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tb_product_type`
--

CREATE TABLE `tb_product_type` (
  `product_type_code` varchar(25) NOT NULL,
  `product_type_name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_product_type`
--

INSERT INTO `tb_product_type` (`product_type_code`, `product_type_name`) VALUES
('PTY01', 'เครื่องจักร'),
('PTY02', 'วัตถุดิบ'),
('PTY03', 'บรรจุภัณฑ์'),
('PTY04', 'อาหาร');

-- --------------------------------------------------------

--
-- Table structure for table `tb_promotion`
--

CREATE TABLE `tb_promotion` (
  `promotion_code` varchar(100) NOT NULL,
  `menu_type_code` varchar(100) NOT NULL,
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

-- --------------------------------------------------------

--
-- Table structure for table `tb_promotion_type`
--

CREATE TABLE `tb_promotion_type` (
  `promotion_type_id` int(10) NOT NULL,
  `promotion_type_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tb_recipe`
--

CREATE TABLE `tb_recipe` (
  `recipe_code` varchar(10) NOT NULL,
  `menu_code` varchar(10) NOT NULL,
  `product_code` varchar(10) NOT NULL,
  `product_qty` varchar(10) NOT NULL,
  `sell_price` varchar(10) NOT NULL,
  `unit` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_recipe`
--

INSERT INTO `tb_recipe` (`recipe_code`, `menu_code`, `product_code`, `product_qty`, `sell_price`, `unit`) VALUES
('R001', 'MN01001', 'PT2001', '', '', ''),
('R002', 'MN01001', 'PT2016', '', '', ''),
('R003', 'MN01002', 'PT2016', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tb_stock`
--

CREATE TABLE `tb_stock` (
  `stock_code` varchar(50) NOT NULL COMMENT 'รหัสอ้างอิงคลังสินค้า',
  `product_code` varchar(50) NOT NULL COMMENT 'รหัสอ้างอิงสินค้า',
  `stock_qty` int(11) NOT NULL COMMENT 'จำนวนสินค้าในคลังสินค้า',
  `stock_minimum_qty` int(11) NOT NULL DEFAULT '0' COMMENT 'จำนวนสินค้าต่ำสุด',
  `stock_safty_qty` int(11) NOT NULL DEFAULT '0' COMMENT 'จำนวนสินค้าต่ำสุดอันตราย',
  `stock_cost_avg` double NOT NULL COMMENT 'ต้นทุน',
  `stock_cost_avg_total` double NOT NULL COMMENT 'ต้นทุนรวม'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tb_sub_menu`
--

CREATE TABLE `tb_sub_menu` (
  `sub_menu_code` varchar(10) NOT NULL,
  `sub_menu_id` int(10) NOT NULL,
  `sub_menu_name` varchar(100) NOT NULL,
  `sub_menu_image` varchar(100) NOT NULL,
  `sub_menu_price` varchar(100) NOT NULL,
  `menu_code` varchar(100) NOT NULL,
  `adddate` datetime NOT NULL,
  `lastupdate` datetime NOT NULL,
  `updayeby` varchar(100) NOT NULL,
  `addby` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_sub_menu`
--

INSERT INTO `tb_sub_menu` (`sub_menu_code`, `sub_menu_id`, `sub_menu_name`, `sub_menu_image`, `sub_menu_price`, `menu_code`, `adddate`, `lastupdate`, `updayeby`, `addby`) VALUES
('SMN001', 1, 'ร้อน', '', '90', 'MN01001', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1'),
('SMN002', 2, 'เย็น', '', '100', 'MN01001', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1'),
('SMN003', 3, 'ปั่น', '', '115', 'MN01001', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1'),
('SMN004', 4, 'จานเล็ก', '', '70', 'MN02001', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1'),
('SMN005', 5, 'จานใหญ่', '', '100', 'MN02001', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1');

-- --------------------------------------------------------

--
-- Table structure for table `tb_supplier`
--

CREATE TABLE `tb_supplier` (
  `supplier_code` varchar(20) NOT NULL COMMENT 'รหัสผู้ขาย (ใช้แสดง)',
  `supplier_name` varchar(200) NOT NULL COMMENT 'ชื่อผู้ขายไทย',
  `supplier_tax` varchar(100) NOT NULL COMMENT 'เลขผู้เสียภาษี',
  `supplier_tel` varchar(50) NOT NULL COMMENT 'เบอร์โทรศัพท์',
  `supplier_fax` varchar(50) NOT NULL COMMENT 'เบอร์แฟค',
  `supplier_email` varchar(200) NOT NULL COMMENT 'อีเมล',
  `supplier_address` varchar(200) NOT NULL,
  `supplier_vat_type` int(11) NOT NULL COMMENT 'ประเภทภาษีมูลค่าเพิ่ม',
  `supplier_vat` int(11) NOT NULL COMMENT 'ภาษีมูลค่าเพิ่ม',
  `supplier_credit_day` int(11) NOT NULL COMMENT 'เครดิตการจ่าย',
  `supplier_condition_pay` varchar(100) NOT NULL COMMENT 'เงื่อนไขการชำระเงิน',
  `supplier_logo` varchar(200) NOT NULL COMMENT 'รูปผู้ขาย',
  `addby` varchar(50) NOT NULL COMMENT 'รหัสผู้เพิ่ม',
  `adddate` datetime NOT NULL COMMENT 'วันที่เพิ่ม',
  `updateby` varchar(50) NOT NULL COMMENT 'รหัสผู้แก้ไข',
  `lastupdate` datetime NOT NULL COMMENT 'วันที่แก้ไข'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tb_table`
--

CREATE TABLE `tb_table` (
  `table_code` varchar(10) NOT NULL,
  `zone_id` int(10) NOT NULL,
  `table_name` varchar(100) NOT NULL,
  `table_amount` varchar(20) NOT NULL,
  `table_img` varchar(100) CHARACTER SET utf32 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_table`
--

INSERT INTO `tb_table` (`table_code`, `zone_id`, `table_name`, `table_amount`, `table_img`) VALUES
('T01', 1, 'โต๊ะ 1', '4', ''),
('T02', 1, 'โต๊ะ 2', '2', ''),
('T03', 1, 'โต๊ะ 3', '6', ''),
('T04', 1, 'โต๊ะ 4', '2', ''),
('T05', 2, 'โต๊ะ 5', '2', ''),
('T06', 2, 'โต๊ะ 6', '6', ''),
('T07', 2, 'โต๊ะ 7', '6', '');

-- --------------------------------------------------------

--
-- Table structure for table `tb_user`
--

CREATE TABLE `tb_user` (
  `user_code` varchar(10) NOT NULL,
  `user_status_id` int(10) NOT NULL,
  `user_position_id` int(10) NOT NULL,
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

-- --------------------------------------------------------

--
-- Table structure for table `tb_user_position`
--

CREATE TABLE `tb_user_position` (
  `user_position_id` int(10) NOT NULL,
  `user_position_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tb_user_status`
--

CREATE TABLE `tb_user_status` (
  `user_status_id` int(10) NOT NULL,
  `user_status_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tb_zone`
--

CREATE TABLE `tb_zone` (
  `zone_id` int(10) NOT NULL,
  `zone_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_zone`
--

INSERT INTO `tb_zone` (`zone_id`, `zone_name`) VALUES
(1, 'โซน นอกร้าน'),
(2, 'โซน ในร้าน');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_admin`
--
ALTER TABLE `tb_admin`
  ADD PRIMARY KEY (`admin_code`);

--
-- Indexes for table `tb_booking`
--
ALTER TABLE `tb_booking`
  ADD PRIMARY KEY (`booking_code`);

--
-- Indexes for table `tb_cancel_list`
--
ALTER TABLE `tb_cancel_list`
  ADD PRIMARY KEY (`cencel_list_code`);

--
-- Indexes for table `tb_customer`
--
ALTER TABLE `tb_customer`
  ADD PRIMARY KEY (`customer_code`);

--
-- Indexes for table `tb_menu`
--
ALTER TABLE `tb_menu`
  ADD PRIMARY KEY (`menu_code`);

--
-- Indexes for table `tb_menu_type`
--
ALTER TABLE `tb_menu_type`
  ADD PRIMARY KEY (`menu_type_code`);

--
-- Indexes for table `tb_order`
--
ALTER TABLE `tb_order`
  ADD PRIMARY KEY (`order_code`);

--
-- Indexes for table `tb_order_cencel`
--
ALTER TABLE `tb_order_cencel`
  ADD PRIMARY KEY (`order_cencel_code`);

--
-- Indexes for table `tb_order_list`
--
ALTER TABLE `tb_order_list`
  ADD PRIMARY KEY (`order_list_code`);

--
-- Indexes for table `tb_product`
--
ALTER TABLE `tb_product`
  ADD PRIMARY KEY (`product_code`);

--
-- Indexes for table `tb_product_type`
--
ALTER TABLE `tb_product_type`
  ADD PRIMARY KEY (`product_type_code`);

--
-- Indexes for table `tb_promotion`
--
ALTER TABLE `tb_promotion`
  ADD PRIMARY KEY (`promotion_code`);

--
-- Indexes for table `tb_promotion_type`
--
ALTER TABLE `tb_promotion_type`
  ADD PRIMARY KEY (`promotion_type_id`);

--
-- Indexes for table `tb_recipe`
--
ALTER TABLE `tb_recipe`
  ADD PRIMARY KEY (`recipe_code`);

--
-- Indexes for table `tb_stock`
--
ALTER TABLE `tb_stock`
  ADD PRIMARY KEY (`stock_code`);

--
-- Indexes for table `tb_sub_menu`
--
ALTER TABLE `tb_sub_menu`
  ADD PRIMARY KEY (`sub_menu_code`);

--
-- Indexes for table `tb_supplier`
--
ALTER TABLE `tb_supplier`
  ADD PRIMARY KEY (`supplier_code`);

--
-- Indexes for table `tb_table`
--
ALTER TABLE `tb_table`
  ADD PRIMARY KEY (`table_code`);

--
-- Indexes for table `tb_user`
--
ALTER TABLE `tb_user`
  ADD PRIMARY KEY (`user_code`);

--
-- Indexes for table `tb_user_position`
--
ALTER TABLE `tb_user_position`
  ADD PRIMARY KEY (`user_position_id`);

--
-- Indexes for table `tb_user_status`
--
ALTER TABLE `tb_user_status`
  ADD PRIMARY KEY (`user_status_id`);

--
-- Indexes for table `tb_zone`
--
ALTER TABLE `tb_zone`
  ADD PRIMARY KEY (`zone_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_order_list`
--
ALTER TABLE `tb_order_list`
  MODIFY `order_list_code` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=137;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
