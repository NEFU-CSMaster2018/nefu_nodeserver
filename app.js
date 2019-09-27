var http = require('http');
var Koa = require('koa');
var app = new Koa();
app.use(function(ctx) {
    ctx.body = 'hello world'
}).listen(3000);