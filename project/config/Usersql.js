var UserSQL = {  
    insert:'INSERT INTO User(uid,userName) VALUES(?,?)', 
    queryAll:'SELECT * FROM book',  
    getUserById:'SELECT * FROM goods WHERE uid = ? ',
    queryCategoryAll: 'SELECT * FROM bookcategory',
    queryPublisherList:'SELECT * FROM publisher'//查询出版社列表
  };
 module.exports = UserSQL;