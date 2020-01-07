-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 07, 2020 at 04:17 AM
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
  `booking_time` time NOT NULL,
  `deleted` int(10) NOT NULL,
  `booking_status` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_booking`
--

INSERT INTO `tb_booking` (`booking_code`, `table_code`, `booking_firstname`, `booking_lastname`, `booking_tel`, `booking_amount`, `booking_email`, `booking_date`, `booking_time`, `deleted`, `booking_status`) VALUES
('BK000001', 'T02', 'inthawa', 'chandharakrob', '0981013056', 2, 'revelsoft@co.th', '2019-12-13', '00:00:00', 0, 0),
('BK000002', 'T02', 'inthawa', 'chandharakrob', '0981013056', 2, 'revelsoft@co.th', '2019-12-13', '00:00:00', 0, 0),
('BK000003', 'T04', 'inthawa', 'chandharakrob', '0981013056', 2, 'revelsoft@co.th', '2019-12-13', '00:00:00', 0, 0),
('BK000004', 'T02', 'inthawa', 'chandharakrob', '0981013056', 2, 'Adler@gmail.com', '2019-12-15', '00:00:00', 1, 0),
('BK000005', 'T08', 'จิดาภา', 'สุวรรณจันทร์', '0849583359', 3, 'jidapa_pook2@hotmail.com', '2019-12-15', '00:00:00', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tb_cancel_list`
--

CREATE TABLE `tb_cancel_list` (
  `cencel_list_id` int(11) NOT NULL,
  `cencel_list_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_cancel_list`
--

INSERT INTO `tb_cancel_list` (`cencel_list_id`, `cencel_list_name`) VALUES
(1, 'ออเดอร์ช้า'),
(2, 'ออเดอร์ผิด'),
(3, 'สินค้าหมด');

-- --------------------------------------------------------

--
-- Table structure for table `tb_customer`
--

CREATE TABLE `tb_customer` (
  `customer_code` varchar(20) NOT NULL,
  `customer_name` varchar(100) NOT NULL,
  `customer_id` varchar(100) NOT NULL,
  `customer_email` varchar(100) NOT NULL,
  `customer_tel` varchar(20) NOT NULL,
  `customer_image` varchar(200) NOT NULL,
  `deleted` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_customer`
--

INSERT INTO `tb_customer` (`customer_code`, `customer_name`, `customer_id`, `customer_email`, `customer_tel`, `customer_image`, `deleted`) VALUES
('CM001', 'นายมนศักดิ์  กางมุ้งคอย', 'monsakza', 'monsakza@hotmail.com', '0924594785', '0be6eed8-9d5a-4a83-80ea-50761e4174d9.png', 0),
('CM002', 'นางนารัตน์  พัดลม', 'narattt', 'naratfan@gmail.com', '0902593586', 'a2c771af-60f7-40c0-98e2-0387ab5d7113.png', 0),
('CM003', 'Pim Chandharakrob', '2818842468176532', 'pimmy.inthawa1997@gmail.com', '0981013056222', 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2818842468176532&height=50&width=50&ext=1580923792&hash=AeQts53SeMKWs-V2', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tb_menu`
--

CREATE TABLE `tb_menu` (
  `menu_code` varchar(10) NOT NULL,
  `menu_id` int(10) NOT NULL,
  `menu_type_id` int(10) NOT NULL,
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

INSERT INTO `tb_menu` (`menu_code`, `menu_id`, `menu_type_id`, `menu_name`, `menu_image`, `menu_price`, `adddate`, `lastupdate`, `updateby`, `addby`) VALUES
('MN01001', 1, 1, 'เอสเปรสโซ่ (ร้อน)', '', '45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1'),
('MN01002', 2, 1, 'เอสเปรสโซ่ (เย็น)', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1'),
('MN01003', 3, 1, 'เอสเปรสโซ่ (ปั่น)', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1'),
('MN01004', 4, 1, 'คาปูชิโน (ร้อน)', '', '45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1'),
('MN01005', 5, 1, 'คาปูชิโน (เย็น)', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1'),
('MN01006', 6, 1, 'คาปูชิโน (ปั่น)', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1'),
('MN01007', 7, 1, 'มอคค่า (ร้อน)', '', '45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01008', 8, 1, 'มอคค่า (เย็น)', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01009', 9, 1, 'มอคค่า (ปั่น)', '', '70', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01010', 10, 1, 'ไวท์ ช็อก มัคคิอาโต้ (ร้อน)', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01011', 11, 1, 'ไวท์ ช็อก มัคคิอาโต้า (เย็น)', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01012', 12, 1, 'ไวท์ ช็อก มัคคิอาโต้า (ปั่น)', '', '80', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01013', 13, 1, 'ลาเต้ (ร้อน)', '', '45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01014', 14, 1, 'ลาเต้ (เย็น)', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01015', 15, 1, 'ลาเต้ (ปั่น)', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01016', 16, 1, 'อเมริกาโน่ (ร้อน)', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01017', 17, 1, 'อเมริกาโน่ (เย็น)', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01018', 18, 1, 'ชา (ร้อน)', '', '45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01019', 19, 1, 'ชาเขียวนม (ร้อน)', '', '45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01020', 20, 1, 'ชาเขียวนม (เย็น)', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01021', 21, 1, 'ชาเขียวนม (ปั่น)', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01022', 22, 1, 'ชาไทย (ร้อน)', '', '45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01023', 23, 1, 'ชาไทย (เย็น)', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01024', 24, 1, 'ชาไทย (ปั่น)', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01025', 25, 1, 'ชานม (ร้อน)', '', '45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01026', 26, 1, 'ชานม (เย็น)', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01027', 27, 1, 'ชานม (ปั่น)', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01028', 28, 1, 'ชามะนาว (เย็น)', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01029', 29, 1, 'ดาร์คช็อกโกแลต (เย็น)', '', '70', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01030', 30, 1, 'สตรอเบอร์รี่ชีสเค้ก (เย็น)', '', '70', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01031', 32, 1, 'นมสด (ร้อน)', '', '45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01033', 33, 1, 'นมสด (เย็น)', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01034', 34, 1, 'นมสด (ปั่น)', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01035', 35, 1, 'ช็อกโกแลต (ร้อน)', '', '45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01036', 36, 1, 'ช็อกโกแลต (เย็น)', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN01037', 37, 1, 'ช็อกโกแลต (ปั่น)', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN02001', 38, 2, 'สปาเก็ตตี้ซอสมะเขือ', '', '105', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN02002', 39, 2, 'สปาเก็ตตี้แฮมพริกแห้ง', '', '120', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN02003', 40, 2, 'ซีซ่าสลัด', '', '95', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN02004', 41, 2, 'พิซซ่าฮาวาเอี้ยน', '', '115', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN02005', 42, 2, 'ปีกไก่ทอด', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN02006', 43, 2, 'เฟรนช์ฟรายส์', '', '45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN03001', 44, 3, 'เค้กสตอเบอรี่ ', '', '60', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN03002', 45, 3, 'เค้กส้ม', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN03003', 46, 3, 'บลูเบอรี่ชีสเค้ก ', '', '65', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN03004', 47, 3, 'บานอฟฟี่', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN03005', 48, 3, 'เครปเค้กเรนโบว์ ', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN03006', 49, 3, 'เค้กช้อกโกแลต', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', ''),
('MN03007', 50, 3, 'เอแคลร์', '', '45', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tb_menu_type`
--

CREATE TABLE `tb_menu_type` (
  `menu_type_id` int(10) NOT NULL,
  `menu_type_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_menu_type`
--

INSERT INTO `tb_menu_type` (`menu_type_id`, `menu_type_name`) VALUES
(1, 'เครื่องดื่ม'),
(2, 'อาหาร'),
(3, 'เบเกอร์รี่');

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
  `order_total_price` varchar(20) NOT NULL,
  `order_vat` int(11) NOT NULL,
  `amount` varchar(10) NOT NULL,
  `promotion_code` varchar(10) NOT NULL,
  `order_vat_type` int(11) NOT NULL,
  `order_vat_price` double NOT NULL,
  `order_net_price` double NOT NULL,
  `order_remark` varchar(200) NOT NULL,
  `order_status` varchar(50) NOT NULL,
  `order_cencel_id` int(11) NOT NULL,
  `addby` varchar(50) NOT NULL,
  `adddate` datetime DEFAULT NULL,
  `updateby` varchar(50) NOT NULL,
  `lastupdate` datetime DEFAULT NULL,
  `order_service` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tb_order_cencel`
--

CREATE TABLE `tb_order_cencel` (
  `order_cencel_id` int(11) NOT NULL COMMENT 'รหัสยกเลิกออเดอร์',
  `cencel_list_code` varchar(20) NOT NULL COMMENT 'เหตุผลยกเลิก',
  `order_code` varchar(20) NOT NULL,
  `addby` varchar(50) NOT NULL,
  `adddate` datetime NOT NULL,
  `updateby` varchar(50) NOT NULL,
  `lastupdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tb_order_list`
--

CREATE TABLE `tb_order_list` (
  `order_list_code` int(100) NOT NULL,
  `order_code` varchar(50) NOT NULL,
  `menu_code` varchar(20) NOT NULL,
  `order_list_name` varchar(200) NOT NULL,
  `order_list_qty` varchar(20) NOT NULL,
  `order_list_price_qty` varchar(20) NOT NULL,
  `order_list_price_sum_qty` varchar(20) NOT NULL,
  `order_list_price_sum` varchar(20) NOT NULL,
  `order_list_remark` text NOT NULL,
  `addby` varchar(50) NOT NULL,
  `adddate` datetime NOT NULL,
  `updateby` varchar(50) NOT NULL,
  `lastupdate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
(7, 'OD000001', '15', 'CM001', '50', '45', '1000', '955', '2020-01-07', '11:00:12'),
(8, 'OD000004', '15', 'CM001', '50', '55', '1000', '955', '2020-03-07', '11:12:12'),
(9, 'OD000003', '15', 'CM002', '50', '65', '1000', '955', '2020-06-07', '12:36:12'),
(10, 'OD000002', '17', 'CM003', '20', '45', '1000', '955', '2020-09-07', '17:00:12'),
(11, 'OD000004', '19', 'CM001', '30', '350', '500', '150', '2020-10-12', '19:08:12'),
(12, 'OD000003', '19', 'CM002', '30', '290', '1000', '710', '2020-01-05', '21:08:12'),
(13, 'OD000005', '', '', '', '170', '', '', '2020-01-07', '18:00:12');

-- --------------------------------------------------------

--
-- Table structure for table `tb_product`
--

CREATE TABLE `tb_product` (
  `product_code` varchar(50) NOT NULL COMMENT 'รหัสอ้างอิงสินค้า',
  `product_type_id` int(10) NOT NULL COMMENT 'ประเภทสินค้า',
  `product_name` varchar(100) NOT NULL COMMENT 'ชื่อสินค้า',
  `product_brand_name` varchar(100) NOT NULL,
  `product_minimum` varchar(10) NOT NULL,
  `product_cost` varchar(20) NOT NULL,
  `product_description` varchar(200) NOT NULL COMMENT 'รายละเอียดสินค้า',
  `unit_id` int(11) NOT NULL,
  `product_image` varchar(200) NOT NULL COMMENT 'รูปสินค้า',
  `addby` varchar(50) NOT NULL,
  `adddate` datetime NOT NULL,
  `updateby` varchar(50) NOT NULL,
  `lastupdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_product`
--

INSERT INTO `tb_product` (`product_code`, `product_type_id`, `product_name`, `product_brand_name`, `product_minimum`, `product_cost`, `product_description`, `unit_id`, `product_image`, `addby`, `adddate`, `updateby`, `lastupdate`) VALUES
('PT1001', 1, 'เครื่องบดกาแฟ', '', '', '', '', 0, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT1002', 1, 'เครื่องชงกาแฟ', '', '', '', '', 0, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT1003', 1, 'เครื่องปั่น', '', '', '', '', 0, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2001', 2, 'เมล็ดกาแฟอาราบิก้า', '', '1000', '0.65', '1,000 กรัม', 2, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2002', 2, 'โกโก้', '', '2', '0.12', '500 กรัม', 2, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2003', 2, 'ชาเขียวมัทฉะ', '', '2', '', '100 กรัม', 3, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2004', 2, 'ชาไทย', '', '2', '', '100 กรัม', 3, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2005', 2, 'ชา', '', '2', '0', '500 กรัม', 3, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2006', 2, 'ชามะนาว', '', '2', '', '1000 กรัม', 3, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2007', 2, 'น้ำเชื่อมกลิ่นวนิลา', '', '2', '', '', 4, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2008', 2, 'น้ำเชื่อมกลิ่นคาราเมล', '', '2', '0.75', '', 4, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2009', 2, 'ไซรัปกลิ่น วนิลา', '', '2', '0.65', '', 0, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2010', 2, 'ไซรัปกลิ่น คาราเมล', '', '2', '', '', 0, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2011', 2, 'ไวท์ช็อคโกแลต', '', '2', '', '', 4, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2012', 2, 'ทีรามิสุ', '', '2', '', '', 4, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2013', 2, 'คาราเมล', '', '2', '', '', 4, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2014', 2, 'ผงช้อกโกแลต', '', '2', '0.65', '', 2, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2015', 2, 'น้ำตาล', '', '2', '', '', 3, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2016', 2, 'นมข้นหวาน', '', '1000', '0.175', '2 กก. / ถุง', 2, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2017', 2, 'คาร์เนชัน', '', '5', '', '', 4, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2018', 2, 'น้ำเปล่าถัง', '', '5', 'null', '', 5, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2019', 2, 'นมสดพาสเจอร์ไรส์ รสจืด', '', '5', '', '2 ลิตร /1 แกรอน', 5, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT2020', 2, 'โอวันติน', '', '', '', 'undefined', 2, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT3001', 3, 'แก้ว 22 ออนซ์', '', '', '', '', 0, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT3002', 3, 'แก้ว 16 ออนซ์', '', '', '', '', 0, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT3003', 3, 'แก้วกาแฟร้อน', '', '', '', '', 0, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT3004', 3, 'หลอด', '', '', '', '', 0, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT3005', 3, 'หลอดปลายช้อน', '', '', '', '', 0, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT3006', 3, 'หลอดกาแฟ', '', '', '', '', 0, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00'),
('PT3007', 3, 'ฝาโดม', '', '', '', '', 0, '', '', '0000-00-00 00:00:00', '', '0000-00-00 00:00:00');

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
  `product_type_id` int(10) NOT NULL,
  `product_type_name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_product_type`
--

INSERT INTO `tb_product_type` (`product_type_id`, `product_type_name`) VALUES
(1, 'เครื่องจักร'),
(2, 'วัตถุดิบ'),
(3, 'บรรจุภัณฑ์'),
(4, 'อาหาร');

-- --------------------------------------------------------

--
-- Table structure for table `tb_promotion`
--

CREATE TABLE `tb_promotion` (
  `promotion_code` int(100) NOT NULL,
  `menu_type_id` int(100) NOT NULL,
  `promotion_header` varchar(100) NOT NULL,
  `promotion_detail` varchar(1000) NOT NULL,
  `promotion_image` varchar(100) NOT NULL,
  `promotion_type` varchar(100) NOT NULL,
  `discount_code` varchar(100) NOT NULL,
  `discount_percent` varchar(50) NOT NULL,
  `discount_price` varchar(50) NOT NULL,
  `discount_giveaway_buy` varchar(10) DEFAULT NULL,
  `discount_giveaway` varchar(10) DEFAULT NULL,
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

INSERT INTO `tb_promotion` (`promotion_code`, `menu_type_id`, `promotion_header`, `promotion_detail`, `promotion_image`, `promotion_type`, `discount_code`, `discount_percent`, `discount_price`, `discount_giveaway_buy`, `discount_giveaway`, `startdate`, `enddate`, `adddate`, `lastupdate`, `updateby`, `addby`, `deleted`) VALUES
(15, 1, 'ลดราคาวันแม่ 50 บาท', 'พาแม่มา ลดทันที 50 บาท', '2b109b5d-5ed4-49b3-964e-3c777faa5240.jpg', 'ส่วนลด', 'lovemom', '', '50', NULL, NULL, '2019-12-23', '2019-12-23', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '1', '1', 0),
(16, 2, 'พาพ่อมา รับส่วนลด 15%', 'พาคุณพ่อมาทานอาหาร รับส่วนลด 15%', '8dbeacd3-ddd7-447c-8b6b-fef77f466589.jpg', 'เปอร์เซ็น', 'daddy15', '15', '', NULL, NULL, '2019-12-23', '2019-12-23', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1', 0),
(17, 2, 'ปีใหม่ 2020', 'ลด 20 บาท ทุกบิล', 'f1921a65-f7e9-4fe7-bf33-7562bcadd466.jpg', 'ส่วนลด', 'newyear2020', '', '20', NULL, NULL, '2019-12-23', '2019-12-23', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1', 0),
(18, 1, 'เช็คอิน รับ30', 'เมื่อเช็คอินที่ร้าน รับส่วนลดทันที 30 บาททุกรายการ', '7e593034-1e72-4418-8432-1df3a83295d7.jpg', 'ส่วนลด', 'checkin30', '', '30', NULL, NULL, '2019-12-24', '2019-12-24', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1', 1),
(19, 3, 'เช็คอิน รับ30', 'เมื่อเช็คอินที่ร้าน รับส่วนลดทันที 30 บาททุกรายการ', 'e8d6258a-65f6-4eb7-b514-a1df76d8f560.jpg', 'ส่วนลด', 'checkin30', '', '30', NULL, NULL, '2019-12-24', '2019-12-24', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1', 0),
(20, 1, 'วาเลนไทน์', 'มาผัวมา ซื้อ 1 ถม 1', '58c30991-311a-45ff-a96c-89a8a6241b9a.jpg', 'แถม', 'love1free1', '', '', '1', '1', '2020-01-05', '2020-02-14', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1', 0),
(21, 1, 'ซื้อ 3 แถม 2 ', 'ซื้อ 3 แถม 2 ', 'undefined', 'แถม', 'B3F2', '', '', '3', '2', '2020-01-05', '2020-01-31', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1', 1),
(23, 1, 'ลดแหลก', 'ซื้อ 1 แถม 3', 'undefined', 'แถม', '1free3', '', '', '1', '3', '2020-01-05', '2020-01-05', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1', 1);

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
-- Table structure for table `tb_promotion_use`
--

CREATE TABLE `tb_promotion_use` (
  `promotion_use_code` int(11) NOT NULL,
  `customer_code` varchar(50) NOT NULL,
  `promotion_code` varchar(50) NOT NULL,
  `discount_code` varchar(50) NOT NULL,
  `order_code` varchar(50) NOT NULL,
  `order_total_price` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL,
  `adddate` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_promotion_use`
--

INSERT INTO `tb_promotion_use` (`promotion_use_code`, `customer_code`, `promotion_code`, `discount_code`, `order_code`, `order_total_price`, `amount`, `adddate`) VALUES
(14, 'CUS0001', '17', 'newyear2020', 'OD000001', '265', '245', '');

-- --------------------------------------------------------

--
-- Table structure for table `tb_recipe`
--

CREATE TABLE `tb_recipe` (
  `recipe_id` int(11) NOT NULL,
  `menu_code` varchar(10) NOT NULL,
  `product_code` varchar(10) NOT NULL,
  `product_qty` varchar(10) NOT NULL,
  `qty_cal` varchar(10) NOT NULL,
  `unit_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_recipe`
--

INSERT INTO `tb_recipe` (`recipe_id`, `menu_code`, `product_code`, `product_qty`, `qty_cal`, `unit_id`) VALUES
(122, 'MN01001', 'PT2001', '5', '5', 2),
(123, 'MN01001', 'PT2016', '5', '5', 2),
(124, 'MN01001', 'PT2014', '5', '5', 2),
(125, 'MN01005', 'PT2001', '5', '5', 2),
(126, 'MN01005', 'PT2012', '5', '5', 4),
(127, 'MN01002', 'PT2001', '1000', '1000', 2),
(128, 'MN01002', 'PT2002', '1000', '1000', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tb_stock`
--

CREATE TABLE `tb_stock` (
  `stock_id` int(11) NOT NULL COMMENT 'รหัสอ้างอิงคลังสินค้า',
  `unit_id` int(11) NOT NULL,
  `product_code` varchar(50) NOT NULL COMMENT 'รหัสอ้างอิงสินค้า',
  `stock_price` varchar(10) NOT NULL,
  `stock_qty` int(11) NOT NULL COMMENT 'จำนวนสินค้าในคลังสินค้า',
  `stock_qty_cal` varchar(10) NOT NULL,
  `stock_minimum_qty` int(11) NOT NULL DEFAULT '0' COMMENT 'จำนวนสินค้าต่ำสุด',
  `stock_safty_qty` int(11) NOT NULL DEFAULT '0' COMMENT 'จำนวนสินค้าต่ำสุดอันตราย',
  `stock_cost_avg` varchar(10) NOT NULL COMMENT 'ต้นทุน',
  `stock_cost` varchar(10) NOT NULL,
  `stock_cost_avg_total` varchar(10) NOT NULL COMMENT 'ต้นทุนรวม',
  `stock_date` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_stock`
--

INSERT INTO `tb_stock` (`stock_id`, `unit_id`, `product_code`, `stock_price`, `stock_qty`, `stock_qty_cal`, `stock_minimum_qty`, `stock_safty_qty`, `stock_cost_avg`, `stock_cost`, `stock_cost_avg_total`, `stock_date`) VALUES
(22, 3, 'PT2001', '650', 1, '1000', 0, 0, '', '', '', '2019-12-24'),
(23, 3, 'PT2016', '175', 1, '1000', 0, 0, '', '', '', '2019-12-24'),
(24, 2, 'PT2014', '650', 1000, '1000', 0, 0, '', '', '', '2019-12-24'),
(28, 5, 'PT2009', '650', 1, '1000', 0, 0, '', '', '', '2019-12-24'),
(29, 5, 'PT2008', '750', 1, '1000', 0, 0, '', '', '', '2019-12-24'),
(39, 2, 'PT2002', '120', 1000, '1000', 0, 0, '', '', '', '2020-01-05'),
(41, 2, 'PT2002', '120', 1000, '1000', 0, 0, '', '', '', '2020-01-07');

-- --------------------------------------------------------

--
-- Table structure for table `tb_stock_out`
--

CREATE TABLE `tb_stock_out` (
  `stock_out_id` int(11) NOT NULL,
  `order_code` varchar(10) NOT NULL,
  `product_code` varchar(10) NOT NULL,
  `menu_code` varchar(10) NOT NULL,
  `product_qty` varchar(10) NOT NULL,
  `product_cost` varchar(10) NOT NULL,
  `menu_qty` varchar(10) NOT NULL,
  `unit` varchar(10) NOT NULL,
  `stock_out_date` varchar(20) NOT NULL
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
('T07', 2, 'โต๊ะ 7', '6', ''),
('T08', 1, 'โต๊ะ 8', '10', '');

-- --------------------------------------------------------

--
-- Table structure for table `tb_unit`
--

CREATE TABLE `tb_unit` (
  `unit_id` int(10) NOT NULL,
  `unit_name` varchar(50) NOT NULL,
  `unit_delete` int(11) NOT NULL,
  `adddate` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_unit`
--

INSERT INTO `tb_unit` (`unit_id`, `unit_name`, `unit_delete`, `adddate`) VALUES
(2, 'กรัม', 0, ''),
(3, 'กิโลกรัม', 0, ''),
(4, 'มิลลิลิตร', 0, ''),
(5, 'ลิตร', 0, '');

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
  ADD PRIMARY KEY (`cencel_list_id`);

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
  ADD PRIMARY KEY (`menu_type_id`);

--
-- Indexes for table `tb_order`
--
ALTER TABLE `tb_order`
  ADD PRIMARY KEY (`order_code`);

--
-- Indexes for table `tb_order_cencel`
--
ALTER TABLE `tb_order_cencel`
  ADD PRIMARY KEY (`order_cencel_id`);

--
-- Indexes for table `tb_order_list`
--
ALTER TABLE `tb_order_list`
  ADD PRIMARY KEY (`order_list_code`);

--
-- Indexes for table `tb_payment`
--
ALTER TABLE `tb_payment`
  ADD PRIMARY KEY (`payment_id`);

--
-- Indexes for table `tb_product`
--
ALTER TABLE `tb_product`
  ADD PRIMARY KEY (`product_code`);

--
-- Indexes for table `tb_product_type`
--
ALTER TABLE `tb_product_type`
  ADD PRIMARY KEY (`product_type_id`);

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
-- Indexes for table `tb_promotion_use`
--
ALTER TABLE `tb_promotion_use`
  ADD PRIMARY KEY (`promotion_use_code`);

--
-- Indexes for table `tb_recipe`
--
ALTER TABLE `tb_recipe`
  ADD PRIMARY KEY (`recipe_id`);

--
-- Indexes for table `tb_stock`
--
ALTER TABLE `tb_stock`
  ADD PRIMARY KEY (`stock_id`);

--
-- Indexes for table `tb_stock_out`
--
ALTER TABLE `tb_stock_out`
  ADD PRIMARY KEY (`stock_out_id`);

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
-- Indexes for table `tb_unit`
--
ALTER TABLE `tb_unit`
  ADD PRIMARY KEY (`unit_id`);

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
-- AUTO_INCREMENT for table `tb_cancel_list`
--
ALTER TABLE `tb_cancel_list`
  MODIFY `cencel_list_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `tb_menu_type`
--
ALTER TABLE `tb_menu_type`
  MODIFY `menu_type_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `tb_order_cencel`
--
ALTER TABLE `tb_order_cencel`
  MODIFY `order_cencel_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'รหัสยกเลิกออเดอร์';
--
-- AUTO_INCREMENT for table `tb_order_list`
--
ALTER TABLE `tb_order_list`
  MODIFY `order_list_code` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;
--
-- AUTO_INCREMENT for table `tb_payment`
--
ALTER TABLE `tb_payment`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `tb_product_type`
--
ALTER TABLE `tb_product_type`
  MODIFY `product_type_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tb_promotion`
--
ALTER TABLE `tb_promotion`
  MODIFY `promotion_code` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `tb_promotion_use`
--
ALTER TABLE `tb_promotion_use`
  MODIFY `promotion_use_code` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `tb_recipe`
--
ALTER TABLE `tb_recipe`
  MODIFY `recipe_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=129;
--
-- AUTO_INCREMENT for table `tb_stock`
--
ALTER TABLE `tb_stock`
  MODIFY `stock_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'รหัสอ้างอิงคลังสินค้า', AUTO_INCREMENT=42;
--
-- AUTO_INCREMENT for table `tb_stock_out`
--
ALTER TABLE `tb_stock_out`
  MODIFY `stock_out_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=187;
--
-- AUTO_INCREMENT for table `tb_unit`
--
ALTER TABLE `tb_unit`
  MODIFY `unit_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `tb_zone`
--
ALTER TABLE `tb_zone`
  MODIFY `zone_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
