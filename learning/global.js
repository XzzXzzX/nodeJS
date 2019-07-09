/**
 * xuan
 * 全局对象
 * JavaScript 中有一个特殊的对象，称为全局对象（Global Object），
 * 它及其所有属性都可以在程序的任何地方访问，即全局变量。
在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，
所有全局变量（除了 global 本身以外）都是 global 对象的属性。
在 Node.js 我们可以直接访问到 global 的属性，而不需要在应用中包含它。
 * 2019-4-23 11:10:52
 */

 console.log("[__filename]  当前执行脚本绝对路径： ", __filename);
 console.log("[__dirname]   当前执行脚本所在目录：", __dirname);

 // 全局定时器,延时多少毫秒后执行，只有1次 ,返回代表定时器的句柄
 var t = setTimeout(function () {
     console.log("全局定时器，");
 }, 1000);

//  return;
// 清理定时器
clearTimeout(t);

// 每多少毫秒执行一次，知道被清除
var t1 = setInterval(function () {
    console.log("循环定时器，每1000毫秒调用1次");
}, 1000);

// 清除循环定时器
clearInterval(t1);

/**
 * console 对象
 */
function consoleTest() {
    // 输出调用堆栈
    console.trace();

    // 代码执行时间测试，参数为标记
    console.time("代码耗时测试")

    /**
     * 测试代码段
     */

    // 结束时间，对应上标记
    console.timeEnd("代码耗时测试");
}

/**
 * 
 */
function processTest() {
    // 输出到终端
    process.stdout.write("Hello World!" + "\n");

    // 通过参数读取
    process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
    });

    // 获取执行路径
    console.log(process.execPath);

    // 平台信息
    console.log(process.platform);

    // 输出当前目录
    console.log('当前目录: ' + process.cwd());

    // 输出当前版本
    console.log('当前版本: ' + process.version);

    // 输出内存使用情况
    console.log(process.memoryUsage());
}

processTest();
