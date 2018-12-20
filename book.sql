/*
Navicat MySQL Data Transfer

Source Server         : xwl
Source Server Version : 50525
Source Host           : localhost:3306
Source Database       : managementstudent

Target Server Type    : MYSQL
Target Server Version : 50525
File Encoding         : 65001

Date: 2018-12-19 17:21:34
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for book
-- ----------------------------
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bookname` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `entertime` datetime DEFAULT NULL,
  `publisher` varchar(255) DEFAULT NULL,
  `givebacktime` datetime DEFAULT NULL,
  `lendtime` datetime DEFAULT NULL,
  `price` varchar(255) DEFAULT '',
  `author` varchar(255) DEFAULT NULL,
  `level` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of book
-- ----------------------------
INSERT INTO `book` VALUES ('1', '鬼谷子的局：全十卷', null, '2018-12-19 14:11:33', '中版集团', null, null, '57', '[美] 阿尔文德·纳拉亚南，约什·贝努等', '4');
INSERT INTO `book` VALUES ('2', '万历十五年（经典版）', null, '2018-12-19 14:12:27', '中南出版', null, null, '74', '叶檀', '3');
INSERT INTO `book` VALUES ('3', '明朝那些事儿·第7部 大结局', null, '2018-12-19 14:12:47', '中信出版', null, null, '86', '[美]彼得蒂尔;布莱克马斯特斯;高玉芳译', '4');
INSERT INTO `book` VALUES ('4', '漫长的告别', null, '2018-12-19 14:13:22', '博集天卷', null, null, '36', '陈忠实', '3');
INSERT INTO `book` VALUES ('5', '摆渡人', null, '2018-12-19 14:13:41', '北京磨铁', null, null, '79', '渡边淳一', '3');
INSERT INTO `book` VALUES ('6', '北欧众神', null, '2018-12-19 14:14:03', '上海读客', null, null, '53', '姓易的', '3');
INSERT INTO `book` VALUES ('7', '没伞的孩子要努力奔跑', null, '2018-12-19 14:14:23', '中版集团', null, null, '58', '石钟山', '3');
INSERT INTO `book` VALUES ('8', '迦梨之歌', null, '2018-12-19 14:14:45', '中南出版', null, null, '75', '陈忠实', '4');
INSERT INTO `book` VALUES ('9', '人猿星球', null, '2018-12-19 14:15:09', '中信出版', null, null, '90', '贾平凹', '4');
INSERT INTO `book` VALUES ('10', '5秒法则', null, '2018-12-19 14:15:38', '博集天卷', null, null, '89', '刘慈欣', '4');
INSERT INTO `book` VALUES ('11', '秘密', null, '2018-12-19 14:16:05', '北京磨铁', null, null, '86', '（美）弗兰克·赫伯特', '4');
INSERT INTO `book` VALUES ('12', '大江大河四部曲', null, '2018-12-19 14:16:32', '上海读客', null, null, '78', '阿耐', '4');
INSERT INTO `book` VALUES ('13', '三生三世枕上书（全2册）', null, '2018-12-19 14:17:01', '中版集团', null, null, '57', '唐七公子', '4');
INSERT INTO `book` VALUES ('14', '狐狸的夏天', null, '2018-12-19 14:17:23', '中南出版', null, null, '67', null, '3');
INSERT INTO `book` VALUES ('15', '来不及说我爱你', null, '2018-12-19 14:17:46', '中信出版', null, null, '68', '匪我思存', '2');
INSERT INTO `book` VALUES ('16', '诺言已老，遇见恰好', null, '2018-12-19 14:18:21', '博集天卷', null, null, '65', '\r\n诺言已老，遇见恰好\r\n     4.5分\r\n苏格兰折耳猫', '2');
INSERT INTO `book` VALUES ('17', '爱你是我做过最好的事', null, '2018-12-19 14:18:44', '北京磨铁', null, null, '54', '笙离', '2');
INSERT INTO `book` VALUES ('18', '暗恋·橘生淮南', null, '2018-12-19 14:19:03', '上海读客', null, null, '46', '八月长安 著', '4');
INSERT INTO `book` VALUES ('19', '十年一品温如言', null, '2018-12-19 14:19:23', '中版集团', null, null, '43', '书海沧生', '4');
INSERT INTO `book` VALUES ('20', '原来可以等到你', null, '2018-12-19 14:19:41', '中南出版', null, null, '37', '三文愚', '4');
INSERT INTO `book` VALUES ('21', '如果可以这样爱', null, '2018-12-19 14:20:09', '中信出版', null, null, '39', '千寻千寻', '4');
INSERT INTO `book` VALUES ('22', '如酥似宝', null, '2018-12-19 14:20:32', '博集天卷', null, null, '46', '阮小凉', '4');
INSERT INTO `book` VALUES ('23', '原来可以等到你', null, '2018-12-19 14:20:51', '北京磨铁', null, null, '74', '三文愚', '4');
