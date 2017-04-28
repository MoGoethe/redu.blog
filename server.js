'use strict'

const express = require('express');
const consolidate= require('consolidate');
const cookieParser = require('cookie-parser');
const session = require('express-session');
//const sessionFileStore = require('session-file-store')(session);
//const setConfig = require('./config/site.Config.js');
//创建服务
const app = express();


app.use(session({
	//store:new sessionFileStore(), //服务器重开有效，session缓存
	secret: 'blog.eibook',
	name: 'userlogin', 
	resave: false,
	saveUninitialized: true,
}));

//模板引擎设置
app.engine("html",consolidate.ejs);
app.set("view engine","html");
app.set("views",__dirname+"/views");

//静态资源访问
app.use("/css",express.static(__dirname+'/css'));
app.use("/js",express.static(__dirname+'/js'));
app.use("/img",express.static(__dirname+'/img'));
app.use("/lib",express.static(__dirname+'/lib'));

//接入路由
const routerIndex = require('./routes');		//首页
const routerArticle = require('./routes/article');		//书籍详情页


//挂载路由
app.use('/', routerIndex);
app.use('/', routerArticle);

//启动服务
const server = app.listen(8089, function () {
	console.log('server listening at http://127.0.0.1:8089');
});






