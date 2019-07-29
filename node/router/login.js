const express = require('express');
const router = express.Router();
const MySql = require('./db.js');

const sql = 'SELECT * FROM register_info';

router.get('/login', (req, res) => {
  MySql.query(sql, (resJson)=> {
    const { account, password } = req.query;  
    const results = resJson.data.filter((item)=> {
      return item.account === account && item.password === password;
    });
    console.log(results);
    if (!!results.length) {
      resJson.data = '登录成功';
      res.send(resJson);
    } else {
      resJson.data = '登录失败';
      resJson.status = 0;
      res.send(resJson);
    }
  })
})

module.exports = router;
