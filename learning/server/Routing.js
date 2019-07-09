/**
 * xuan
 * 路由
 * 我们要为路由提供请求的 URL 和其他需要的 GET 及 POST 参数，随后路由需要根据这些数据来执行相应的代码。
因此，我们需要查看 HTTP 请求，从中提取出请求的 URL 以及 GET/POST 参数。
这一功能应当属于路由还是服务器（甚至作为一个模块自身的功能）确实值得探讨，但这里暂定其为我们的HTTP服务器的功能。
 * 2019-4-23 10:58:34
 */

 function route(pathname) {
     console.log("About to route a request for " + pathname);
 }

exports.route = route;