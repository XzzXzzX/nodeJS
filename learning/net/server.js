var net = require("net");

function onConnect(socket) {
    console.log("client connect ");
    socket.on('end', function () {
        console.log("client connect stop");
    })

    socket.write('Hello World!\r\n');
    socket.pipe(socket);
}

function startserver() {
    // 创建服务器
    var server = net.createServer(onConnect);
    // 监听8888端口
    server.listen(8888, function () {
        console.log("server is listening 8888");
    });
}

startserver();