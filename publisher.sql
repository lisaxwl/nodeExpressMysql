/*
Navicat MySQL Data Transfer

Source Server         : xwl
Source Server Version : 50525
Source Host           : localhost:3306
Source Database       : managementstudent

Target Server Type    : MYSQL
Target Server Version : 50525
File Encoding         : 65001

Date: 2018-12-19 17:21:55
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for publisher
-- ----------------------------
DROP TABLE IF EXISTS `publisher`;
CREATE TABLE `publisher` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of publisher
-- ----------------------------
INSERT INTO `publisher` VALUES ('1', '中版集团');
INSERT INTO `publisher` VALUES ('2', '中南出版');
INSERT INTO `publisher` VALUES ('3', '中信出版');
INSERT INTO `publisher` VALUES ('4', '博集天卷');
INSERT INTO `publisher` VALUES ('5', '北京磨铁');
INSERT INTO `publisher` VALUES ('6', '上海读客');
