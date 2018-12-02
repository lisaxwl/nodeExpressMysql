var UserSQL = {  
    insert:'INSERT INTO User(uid,userName) VALUES(?,?)', 
    queryAll:'SELECT * FROM goods',  
    getUserById:'SELECT * FROM goods WHERE uid = ? ',
  };
 module.exports = UserSQL;