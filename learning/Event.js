/**
 * node.js事件类EventEmitter
 */
var events = require("events");

var eventEmitter = new events.EventEmitter();

// 事件监听设置
// 方法1，设置监听
eventEmitter.on('send', function (param1, param2){
    console.log("send 事件响应", param1, param2);
});

// 方法2，对指定事件添加一个监听到事件列表末尾
eventEmitter.addListener('send', function (p1, p2) {
    console.log('send 事件响应2', p1, p2);
})

console.log("等待事件发出");

// 1000毫秒后发出事件
setTimeout(function () {
    console.log("send 事件发出");

    // 发出事件
    eventEmitter.emit('send', 'param1', 'param2');
}, 1000);
