/*
Navicat MySQL Data Transfer

Source Server         : xwl
Source Server Version : 50525
Source Host           : localhost:3306
Source Database       : managementstudent

Target Server Type    : MYSQL
Target Server Version : 50525
File Encoding         : 65001

Date: 2018-12-19 17:21:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for bookcategory
-- ----------------------------
DROP TABLE IF EXISTS `bookcategory`;
CREATE TABLE `bookcategory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bookcategory
-- ----------------------------
INSERT INTO `bookcategory` VALUES ('1', '党政学习');
INSERT INTO `bookcategory` VALUES ('2', '人文历史');
INSERT INTO `bookcategory` VALUES ('3', '境外原版');
INSERT INTO `bookcategory` VALUES ('4', '经济管理');
INSERT INTO `bookcategory` VALUES ('5', '当代文学');
INSERT INTO `bookcategory` VALUES ('6', '悬疑推理');
INSERT INTO `bookcategory` VALUES ('7', '影视小说');
INSERT INTO `bookcategory` VALUES ('8', '情感小说');
INSERT INTO `bookcategory` VALUES ('9', '科幻奇幻');
INSERT INTO `bookcategory` VALUES ('10', '青春文学');
INSERT INTO `bookcategory` VALUES ('11', '成功励志');
INSERT INTO `bookcategory` VALUES ('12', '社会科学');
INSERT INTO `bookcategory` VALUES ('13', '理财投资');
INSERT INTO `bookcategory` VALUES ('14', '武侠小说');
INSERT INTO `bookcategory` VALUES ('15', '任务传记');
INSERT INTO `bookcategory` VALUES ('16', '科普新知');
INSERT INTO `bookcategory` VALUES ('17', '教育教材');
INSERT INTO `bookcategory` VALUES ('18', '军事战争');
INSERT INTO `bookcategory` VALUES ('19', '亲自童话');
INSERT INTO `bookcategory` VALUES ('20', '古典文学');
INSERT INTO `bookcategory` VALUES ('21', '商战小说');
INSERT INTO `bookcategory` VALUES ('22', '短篇小说');
INSERT INTO `bookcategory` VALUES ('23', '译林精品');
INSERT INTO `bookcategory` VALUES ('24', '幽默笑话');
INSERT INTO `bookcategory` VALUES ('25', '职场必备');
INSERT INTO `bookcategory` VALUES ('26', '旅游见闻');
INSERT INTO `bookcategory` VALUES ('27', '健康生活');
INSERT INTO `bookcategory` VALUES ('28', '时尚美妆');
