/**
 * xuan
 * 第一个服务器
 * 2019-4-19 10:58:56
 */
var http = require("http");
var url = require("url");
var route = require("./Routing");

function start() {
    function onRequest(request, response) {
        var pathname = url.parse(request.url);
        // console.log("request url parse: ", pathname);
        console.log("request url name: ", pathname.pathname);
        route.route(pathname.pathname);


        // 发送 HTTP 头部 
        // HTTP 状态值: 200 : OK
        // 内容类型: text/plain
        response.writeHead(200, {'Content-type':'text/plain'});
        response.write("Hello hello");
        response.end("Hello node.js");
    }

    let server = http.createServer(onRequest);
    server.listen(8888);
    console.log("server start");

    console.log("Server running at http://127.0.0.1:8888/");
}
start()
// exports.start = start;
