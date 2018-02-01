const Koa = require('koa');
const cors = require('koa-cors');
var mongoose = require('mongoose');
const path = require('path');
const app = new Koa();
const views = require('koa-views')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser');
// mongoose.connect('mongodb://182.92.233.153:27017/byjd');
mongoose.connect('mongodb://127.0.0.1:27017/tokens');
mongoose.connection.on('err', function (error) {
    console.log('数据库连接失败:' + error);
})
mongoose.connection.on('open', function () {
    console.log('数据库连接成功');
});

const staticPath = './static'

app.use(static(
    path.join(__dirname, staticPath)
))
app.use(views(path.join(__dirname, './view'), {
    extension: 'html'
}))

const routers = require('./routers/index');

app.use(cors());
app.use(bodyParser());

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods());

app.listen(3000);