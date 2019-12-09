-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 09, 2019 at 01:37 PM
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
-- Table structure for table `tb_booking`
--

CREATE TABLE `tb_booking` (
  `booking_code` varchar(20) NOT NULL,
  `table_id` int(10) NOT NULL,
  `booking_firstname` varchar(100) NOT NULL,
  `booking_lastname` varchar(100) NOT NULL,
  `booking_tel` varchar(10) NOT NULL,
  `booking_amount` int(10) NOT NULL,
  `booking_email` varchar(100) NOT NULL,
  `booking_date` date NOT NULL,
  `booking_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_booking`
--

INSERT INTO `tb_booking` (`booking_code`, `table_id`, `booking_firstname`, `booking_lastname`, `booking_tel`, `booking_amount`, `booking_email`, `booking_date`, `booking_time`) VALUES
('BK000004', 0, 'inthawa', 'chandharakrob', '0981013056', 3, 'laundromat@gmail.com', '2019-12-13', '00:00:00'),
('BK000005', 0, 'จิดาภา', 'สุวรรณจันทร์', '0849583359', 4, 'jidapa_pook2@hotmail.com', '2019-12-07', '00:00:00'),
('BK000006', 0, 'ทองใบ', 'สุวรรณจันทร์', '0849583359', 5, 'jidapa_pook2@hotmail.com', '2019-12-07', '00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tb_customer`
--

CREATE TABLE `tb_customer` (
  `customer_code` varchar(20) NOT NULL,
  `customer_id_line` varchar(100) NOT NULL,
  `customer_email` varchar(100) NOT NULL,
  `customer_phone` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
('MN01001', 1, 'MNT01', 'กาแฟ', '', '100', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1'),
('MN01002', 2, 'MNT01', 'ลาเต้', '', '120', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1'),
('MN02001', 3, 'MNT02', 'ข้าวผัด', '', '70', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1'),
('MN02002', 4, 'MNT02', 'กุ้งชุบแป้งทอด', '', '200', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1'),
('MN03001', 5, 'MNT03', 'เค๊กหน้านิ่ม', '', '60', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1'),
('MN03002', 6, 'MNT03', 'เค๊กส้ม', '', '55', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1');

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
('MNT03', '3', 'เบเกอร์รี่'),
('MNT04', '4', 'อาหารทานเล่น');

-- --------------------------------------------------------

--
-- Table structure for table `tb_order`
--

CREATE TABLE `tb_order` (
  `order_code` varchar(50) NOT NULL,
  `customer_code` varchar(50) NOT NULL,
  `table_id` int(10) NOT NULL,
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
  `lastupdate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_order`
--

INSERT INTO `tb_order` (`order_code`, `customer_code`, `table_id`, `order_date`, `order_due_date`, `order_total_price`, `order_vat`, `order_vat_type`, `order_vat_price`, `order_net_price`, `order_remark`, `order_status`, `addby`, `adddate`, `updateby`, `lastupdate`) VALUES
('OD000001', 'CM001', 1, '20191261575565422789', NULL, 515, 0, 0, 0, 0, '', '', '', NULL, '', NULL),
('OD000002', 'CM001', 1, '20191261575567728370', NULL, 460, 0, 0, 0, 0, '', '', '', NULL, '', NULL),
('OD000003', 'CM001', 1, '20191261575569024665', NULL, 540, 0, 0, 0, 0, '', '', '', NULL, '', NULL),
('OD000004', 'CM001', 1, '20191261575569938163', NULL, 420, 0, 0, 0, 0, '', '', '', NULL, '', NULL),
('OD000005', 'CM001', 1, '20191261575570194527', NULL, 880, 0, 0, 0, 0, '', '', '', NULL, '', NULL),
('OD000006', 'CM001', 1, '20191261575571476869', NULL, 420, 0, 0, 0, 0, '', '', '', NULL, '', NULL),
('OD000007', 'CM001', 1, '20191261575571621062', NULL, 455, 0, 0, 0, 0, '', '', '', NULL, '', NULL),
('OD000008', 'CM001', 1, '20191261575571635051', NULL, 480, 0, 0, 0, 0, '', '', '', NULL, '', NULL),
('OD000009', 'CM001', 1, '20191261575616950422', NULL, 420, 0, 0, 0, 0, '', '', '', NULL, '', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tb_order_cencel`
--

CREATE TABLE `tb_order_cencel` (
  `order_cencel_code` varchar(20) NOT NULL COMMENT 'รหัสยกเลิกออเดอร์',
  `cencel_remark_code` varchar(20) NOT NULL COMMENT 'เหตุผลยกเลิก',
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
(54, 'OD000001', 'MN01001', 'กาแฟ', 1, 100, 100, 515, '', '', '0000-00-00 00:00:00', '', NULL),
(55, 'OD000001', 'MN01002', 'ลาเต้', 2, 120, 240, 515, '', '', '0000-00-00 00:00:00', '', NULL),
(56, 'OD000001', 'MN03001', 'เค๊กหน้านิ่ม', 2, 60, 120, 515, '', '', '0000-00-00 00:00:00', '', NULL),
(57, 'OD000001', 'MN03002', 'เค๊กส้ม', 1, 55, 55, 515, '', '', '0000-00-00 00:00:00', '', NULL),
(58, 'OD000002', 'MN01001', 'กาแฟ', 2, 100, 200, 460, '', '', '0000-00-00 00:00:00', '', NULL),
(59, 'OD000002', 'MN02002', 'กุ้งชุบแป้งทอด', 1, 200, 200, 460, '', '', '0000-00-00 00:00:00', '', NULL),
(60, 'OD000002', 'MN03001', 'เค๊กหน้านิ่ม', 1, 60, 60, 460, '', '', '0000-00-00 00:00:00', '', NULL),
(61, 'OD000003', 'MN01001', 'กาแฟ', 1, 100, 100, 540, '', '', '0000-00-00 00:00:00', '', NULL),
(62, 'OD000003', 'MN01002', 'ลาเต้', 2, 120, 240, 540, '', '', '0000-00-00 00:00:00', '', NULL),
(63, 'OD000003', 'MN02002', 'กุ้งชุบแป้งทอด', 1, 200, 200, 540, '', '', '0000-00-00 00:00:00', '', NULL),
(64, 'OD000004', 'MN01002', 'ลาเต้', 1, 120, 120, 420, '', '', '0000-00-00 00:00:00', '', NULL),
(65, 'OD000004', 'MN01001', 'กาแฟ', 3, 100, 300, 420, '', '', '0000-00-00 00:00:00', '', NULL),
(66, 'OD000005', 'MN01002', 'ลาเต้', 4, 120, 480, 880, '', '', '0000-00-00 00:00:00', '', NULL),
(67, 'OD000005', 'MN01001', 'กาแฟ', 2, 100, 200, 880, '', '', '0000-00-00 00:00:00', '', NULL),
(68, 'OD000005', 'MN02002', 'กุ้งชุบแป้งทอด', 1, 200, 200, 880, '', '', '0000-00-00 00:00:00', '', NULL),
(69, 'OD000006', 'MN01001', 'กาแฟ', 3, 100, 300, 420, '', '', '0000-00-00 00:00:00', '', NULL),
(70, 'OD000006', 'MN01002', 'ลาเต้', 1, 120, 120, 420, '', '', '0000-00-00 00:00:00', '', NULL),
(71, 'OD000007', 'MN03002', 'เค๊กส้ม', 1, 55, 55, 455, '', '', '0000-00-00 00:00:00', '', NULL),
(72, 'OD000007', 'MN02002', 'กุ้งชุบแป้งทอด', 2, 200, 400, 455, '', '', '0000-00-00 00:00:00', '', NULL),
(73, 'OD000008', 'MN01002', 'ลาเต้', 4, 120, 480, 480, '', '', '0000-00-00 00:00:00', '', NULL),
(74, 'OD000009', 'MN01001', 'กาแฟ', 3, 100, 300, 420, '', '', '0000-00-00 00:00:00', '', NULL),
(75, 'OD000009', 'MN01002', 'ลาเต้', 1, 120, 120, 420, '', '', '0000-00-00 00:00:00', '', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tb_order_remark`
--

CREATE TABLE `tb_order_remark` (
  `order_remark_code` varchar(20) NOT NULL,
  `order_remark` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tb_product`
--

CREATE TABLE `tb_product` (
  `product_code` varchar(50) NOT NULL COMMENT 'รหัสอ้างอิงสินค้า',
  `product_type_code` varchar(50) NOT NULL COMMENT 'ประเภทสินค้า',
  `product_name` varchar(100) NOT NULL COMMENT 'ชื่อสินค้า',
  `product_brand_name` varchar(100) NOT NULL,
  `product_description` varchar(200) NOT NULL COMMENT 'รายละเอียดสินค้า',
  `product_image` varchar(200) NOT NULL COMMENT 'รูปสินค้า',
  `addby` varchar(50) NOT NULL,
  `adddate` datetime NOT NULL,
  `updateby` varchar(50) NOT NULL,
  `lastupdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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

-- --------------------------------------------------------

--
-- Table structure for table `tb_promotion`
--

CREATE TABLE `tb_promotion` (
  `promotion_code` varchar(100) NOT NULL,
  `promotion_type_code` varchar(100) NOT NULL,
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

INSERT INTO `tb_promotion` (`promotion_code`, `promotion_type_code`, `promotion_header`, `promotion_detail`, `promotion_image`, `startdate`, `enddate`, `adddate`, `lastupdate`, `updateby`, `addby`, `deleted`) VALUES
('', 'TPMT02', 'ลดแหลก', 'ลด500', '', '', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1', 0),
('PMT001', 'TPMT01', 'ลดแหลกแจกแถม', 'ซื้อ1แถม1 ซื้อ2แถม5', '', '2019-12-10 ', '2019-12-28 ', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tb_promotion_type`
--

CREATE TABLE `tb_promotion_type` (
  `promotion_type_code` varchar(100) NOT NULL,
  `promotion_type_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
('SMN001', 1, 'กาแฟร้อน', '', '90', 'MN01001', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1'),
('SMN002', 2, 'กาแฟเย็น', '', '100', 'MN01001', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1'),
('SMN003', 3, 'กาแฟปั่น', '', '115', 'MN01001', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '', '1'),
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
  `table_id` int(10) NOT NULL,
  `zone_id` int(10) NOT NULL,
  `table_name` varchar(100) NOT NULL,
  `table_amount` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_booking`
--
ALTER TABLE `tb_booking`
  ADD PRIMARY KEY (`booking_code`);

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
-- Indexes for table `tb_order_remark`
--
ALTER TABLE `tb_order_remark`
  ADD PRIMARY KEY (`order_remark_code`);

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
  ADD PRIMARY KEY (`promotion_type_code`);

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
  ADD PRIMARY KEY (`table_id`);

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
  MODIFY `order_list_code` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
