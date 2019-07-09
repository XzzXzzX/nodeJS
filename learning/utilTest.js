/**
 * xuan
 * 工具方法
 * 2019-4-23 11:43:49
 */
var util = require("util");

 /**
  * 测试对象
  */
 function Person() {
     this.name = "ABC";
     this.toString = function () {
         return this.name;
     }
 }

 function utilTest() {
    /**
     * util.inspect(object,[showHidden],[depth],[colors]) 是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。

showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息。

depth 表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多 少。如果不指定depth，默认会递归2层，指定为 null 表示将不限递归层数完整遍历对象。 如果color 值为 true，输出格式将会以ANSI 颜色编码，通常用于在终端显示更漂亮 的效果。

特别要指出的是，util.inspect 并不会简单地直接把对象转换为字符串，即使该对 象定义了 toString 方法也不会调用。
     */
    var obj = new Person();
    console.log(util.inspect(obj));
    console.log(util.inspect(obj, true));

    /**
     * 
     * util.isArray(object)
如果给定的参数 "object" 是一个数组返回true，否则返回false。

util.isRegExp(object)
如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。

util.isDate(object)
如果给定的参数 "object" 是一个日期返回true，否则返回false。

util.isError(object)
如果给定的参数 "object" 是一个错误对象返回true，否则返回false。
     */
    console.log(util.isArray([]));
    // true
    console.log(util.isArray(new Array));
    // true
    console.log(util.isArray({}));
    // false

    console.log(util.isRegExp(/some regexp/));
    // true
    console.log(util.isRegExp(new RegExp('another regexp')));
    // true
    console.log(util.isRegExp({}));
    // false

    console.log(util.isDate(new Date()));
    // true
    console.log(util.isDate(Date()));
    // false (without 'new' returns a String)
    console.log(util.isDate({}));
    // false

    console.log(util.isError(new Error()));
    // true
    console.log(util.isError(new TypeError()));
    // true
    console.log(util.isError({ name: 'Error', message: 'an error occurred' }));
    // false
 }

 utilTest();