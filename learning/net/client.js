var net = require("net");

function clientDoSomething() {
    var client = net.connect({port:8888}, function () {
        console.log("client connect server success.");
    });

    client.on('data', function (data) {
        console.log(data.toString());
        client.end();
    })

    client.on('end', function () {
        console.log("client lost server connect ");
    });
}

clientDoSomething();