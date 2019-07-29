const mysql = require('mysql');
const { dbbaseConfig } = require('./config');

/**
 * 
 * @class MySql
 */
class MySql {
  constructor() {

  }
  
  static query(sql, callback) {
    const connection = mysql.createConnection(dbbaseConfig);
    connection.connect();
    
    connection.query(sql, (error, results)=> {
      if (error) throw error;

      const data = {
        status: 1,
        data: results,
        msg: '成功'
      }
      callback && callback(data)
      
      connection.end();
    })
  }
}

module.exports = MySql;
