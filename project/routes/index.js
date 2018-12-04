var express = require('express');
var router = express.Router();
var moment = require("moment");//日期时间格式化插件

//加载 mysql模块
var mysql = require('mysql');
var db = require('../config/db');
var userSQL = require('../config/Usersql');


// 使用bd.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(db.mysql);

//执行创建连接
// connection.connect();

//响应一个JSON数据
var responseJSON = function (res,ret) {
	if(typeof ret === 'undefined') {
		res.json({ code:'-200', msg: '操作失败'});
	}else {
		res.json(ret);
	}
}

var menuList = [
{
	"id":"000",
	"name":"全部",
	"list":[{
		"bid":"000001",
		"menuName":"全部",
		"url":"/"
	}]
},{
	"id":"001",
	"name":"春季",
	"list":[{
		"bid":"001001",
		"menuName":"上衣内搭",
		"url":"/all/"
	},{
		"bid":"001002",
		"menuName":"衬衫",
		"url":"/users/"
	},{
		"bid":"001003",
		"menuName":"外套",
		"url":"/list/"
	},{
		"bid":"001004",
		"menuName":"卫衣套头",
		"url":"/list/"
	},{
		"bid":"001005",
		"menuName":"裤子",
		"url":"/list/"
	},{
		"bid":"001006",
		"menuName":"打底裤",
		"url":"/list/"
	},{
		"bid":"001007",
		"menuName":"裙子",
		"url":"/list/"
	}]
},{
	"id":"002",
	"name":"夏季",
	"list":[{
		"bid":"002001",
		"menuName":"T恤衫"
	},{
		"bid":"002002",
		"menuName":"套装"
	},{
		"bid":"002003",
		"menuName":"雪纺衫"
	},{
		"bid":"002004",
		"menuName":"裙子"
	},{
		"bid":"002005",
		"menuName":"防晒衣"
	},{
		"bid":"002006",
		"menuName":"裤子"
	}]
}];


router.get('/',function(req,res,next){ //首页
	//查

	pool.getConnection(function(err,connection){
		var list;
		if(err) {
			console.log('MySQL数据库建立连接失败。');
			throw err;
		}else {
			connection.query(userSQL.queryAll,function (err, result) {
				// moment("2017-08-19T16:00:00.000Z").format('YYYY-MM-DD HH:mm:ss')
				var arryList=[];
				result.forEach(function(item){
					item['buytime'] = moment(item.buytime).format('YYYY-MM-DD HH:mm:ss');
				})

				console.log(JSON.stringify(result)+"++")
				if(result) {
					list = {
						code: 200,
						msg:'ok',
						data: result
					}
				}
				// 以json形式，把操作结果返回给前台页面 
				// responseJSON(res,list);
				res.render('index', {current:menuList[0].name,message:"全部",result: list,menuList:menuList})

				//释放连接
				connection.release();
				// pool.end();//关闭连接池

				//releaserelease方法将其归还到连接池中 connection.release();
				//destroy当一个连接不再需要使用且需要从连接池中移除时用connection对象的destroy方法。
				// connection.destroy(); 连接移除后，连接池中的连接数减一

				//end当一个连接池不再需要使用时，用连接池对象的end方法关闭连接池。pool.end();
			})
		}
		
	})
	// connection.query(sql,function (err, result) {
	// 	if(err){
	// 		console.log('[SELECT ERROR] - ', err.message);
	// 		return;
	// 	}
	// 	res.render('index', {current:menuList[0].name,message:"全部",result: result,menuList:menuList})
	// })
});

router.get('/all', function(req, res, next) {
  res.render('index', {current:menuList[1].name,message:"上衣内搭",menuList:menuList})

});

router.get('/users', function(req, res, next) {
  res.render('index', {current:menuList[1].name,message:"衬衫",menuList:menuList});

});


router.get('/list', function(req, res, next) {
  res.render('index', {current:menuList[1].name,message:"外套",menuList:menuList});

});


module.exports = router;
