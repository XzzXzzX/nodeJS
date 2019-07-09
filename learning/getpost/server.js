var http = require("http");
var url = require("url");
var util = require("util");
var querystring = require('querystring');

function onResponse(req, res) {
    res.writeHead(200, {'Content-type':'text/plain; charset=utf-8'});
    // res.end(util.inspect(url.parse(req.url), true));

    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    res.write("网站名：" + params.name);
    res.write("\n");
    res.write("网站 URL：" + params.url);
    res.end();
}

function onResponse1(req, res) {
    // post请求表单
    var postHTML = 
      '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
      '<body>' +
      '<form method="post">' +
      '网站名： <input name="name"><br>' +
      '网站 URL： <input name="url"><br>' +
      '<input type="submit">' +
      '</form>' +
      '</body></html>';

    var body = "";
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
    // 解析参数
    body = querystring.parse(body);
    // 设置响应头部信息及编码
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});

    if(body.name && body.url) { // 输出提交的数据
        res.write("网站名：" + body.name);
        res.write("<br>");
        res.write("网站 URL：" + body.url);
    } else {  // 输出表单
        res.write(postHTML);
    }
    res.end();
    });
}

function startServer() {
    // http.createServer(onResponse).listen(3000);
    http.createServer(onResponse1).listen(3000);

    console.log("start local server");
}

startServer();