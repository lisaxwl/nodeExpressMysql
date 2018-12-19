var express = require('express');
var router = express.Router();
var moment = require("moment");//日期时间格式化插件

//加载 mysql模块
var mysql = require('mysql');
var db = require('../config/db');
var userSQL = require('../config/Usersql');

var menuData = require('../config/menuList');


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
					item['entertime'] = moment(item.entertime).format('YYYY-MM-DD HH:mm:ss');
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
				res.render('index', {current:menuData.menu[0].name,message:"全部",result: list,menuList:menuData.menu})

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
});

router.get('/addBook', function(req, res, next) {
  res.render('index', {current:menuData.menu[0].name,message:"图书录入",menuList:menuData.menu})


});
router.get('/categoryList', function(req, res, next) {//分类列表
  pool.getConnection(function(err,connection){
  	if(err) {
		console.log('MySQL数据库建立连接失败。');
		throw err;
	}else {
		connection.query(userSQL.queryCategoryAll,function (err, result) {
			res.render('index', {current:menuData.menu[0].name,
				message:"分类列表",
				menuList:menuData.menu,result:result});
			console.log(JSON.stringify(result));

		connection.release();
		})
	}

  })
  

});

router.get('/publisherList', function(req, res, next) {//出版社列表
	pool.getConnection(function(err,connection){
  	if(err) {
		console.log('MySQL数据库建立连接失败。');
		throw err;
	}else {
		connection.query(userSQL.queryPublisherList,function (err, result) {
			res.render('index', {current:menuData.menu[0].name,message:"出版列表",
				menuList:menuData.menu,
				result:result
			});

		connection.release();
		})
	}

  })
  

});



module.exports = router;
