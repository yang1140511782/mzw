const express = require('express');
const app = express();

// 路由地址
const login = require('./router/login');


app.use('/query', login);

app.listen(8888, ()=> console.log('连接成功')); 