//加载 mysql模块
var mysql = require('mysql');
var db = require('../config/db');
var pool = mysql.createPool(db.mysql);
module.exports ={
    "connect":function(sql,callback){
        pool.getConnection(function(err,connection){
        if(err) {
            console.log('MySQL数据库建立连接失败。');
            throw err;
        }else {
            connection.query(sql,function (err, result) {
              
              callback(result)

              connection.release();
            })
        }

      })
    },
    "toast":function(str){
        console.log("toast方法"+str);
    }
}