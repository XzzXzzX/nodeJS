
/**
 * 模块
 *  require('./hello') 引入了当前目录下的 hello.js 文件（./ 为当前目录，node.js 默认后缀为 js
 */
var Hello = require("./hello");

hello = new Hello();
hello.setName("ZX");
hello.sayHello();