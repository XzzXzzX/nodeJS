/**
 * xuan
 * 文件系统
 * 2019-4-23 11:52:55
 */

 var fs = require("fs");

 /**
  * 同步读取文件
  */
 function readFileSync() {
     // 异步读取
     fs.readFile('input.txt', function (err, data) {
        // data 是一个buffer
        console.log(data.toString());
        if (err)
        {
            console.log(err);
        }
     });
 }

/**
 * 异步读取文件
 */
 function readFileUnsync() {
     var data = fs.readFileSync('input.txt');
     console.log("读取数据： ", data.toString());
 }

//  readFileSync();
//  readFileUnsync();

/**
 * 打开文件
 */
function openFile() {
    //fd 文件描述符
    fs.open('input.txt', 'r+', function (err, fd) {
        if (err)
        {
            console.error("open file faided: ", err);
            return;
        }
        console.log("open file success. fd: ", fd.toString());
    })
}
// openFile();

/**
 * 文件信息
 */
function fileStat() {
    fs.stat('input.txt', function (err, stats) {
        if (err) {
            return console.error(err);
        }
        console.log(stats);
        console.log("读取文件信息成功！");
        
        // 检测文件类型
        console.log("是否为文件(isFile) ? " + stats.isFile());
        console.log("是否为目录(isDirectory) ? " + stats.isDirectory());    
     });
}
// fileStat();

/**
 * 写文件
 */
function writeFile() {
    // flag w 会覆盖文件已有内容，a+则是在文件末尾添加
    fs.writeFile('input.txt', '我是通 过fs.writeFile 写入文件的内容', {flag:'a+'}, function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("数据写入成功！");
        console.log("--------我是分割线-------------")
        console.log("读取写入的数据！");
        fs.readFile('input.txt', function (err, data) {
           if (err) {
              return console.error(err);
           }
           console.log("异步读取文件数据: " + data.toString());
        });
     });
}
// writeFile();

/**
 * 读取文件
 */
function readFile() {
    var buf = new Buffer.alloc(1024);

    console.log("准备打开已存在的文件！");
    fs.open('input.txt', 'r+', function(err, fd) {
        if (err) {
            return console.error(err);
        }
        console.log("文件打开成功！");
        console.log("准备读取文件：");
        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
            if (err){
                console.log(err);
            }
            console.log(bytes + "  字节被读取");
            
            // 仅输出读取的字节
            if(bytes > 0){
                console.log(buf.slice(0, bytes).toString());
            }
        });
    });
}
// readFile();

/**
 * 关闭文件
 */
function closeFile() {
    var buf = new Buffer.alloc(1024);

    console.log("准备打开文件！");
    // 打开
    fs.open('input.txt', 'r+', function(err, fd) {
        if (err) {
            return console.error(err);
        }
        console.log("文件打开成功！");
        console.log("准备读取文件！");
        // 读取
        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
            if (err){
                console.log(err);
            }

            // 仅输出读取的字节
            if(bytes > 0){
                console.log(buf.slice(0, bytes).toString());
            }

            // 关闭文件
            fs.close(fd, function(err){
                if (err){
                    console.log(err);
                } 
                console.log("文件关闭成功");
            });
        });
    });
}
// closeFile();

/**
 * 截取文件
 */
function fileCut() {
    var buf = new Buffer.alloc(1024);

    console.log("准备打开文件！");
    fs.open('input.txt', 'r+', function(err, fd) {
        if (err) {
            return console.error(err);
        }
        console.log("文件打开成功！");
        console.log("截取10字节内的文件内容，超出部分将被去除。");
        
        // 截取文件
        fs.ftruncate(fd, 10, function(err){
            if (err){
                console.log(err);
            } 
            console.log("文件截取成功。");
            console.log("读取相同的文件"); 
            fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
                if (err){
                    console.log(err);
                }

                // 仅输出读取的字节
                if(bytes > 0){
                    console.log(buf.slice(0, bytes).toString());
                }

                // 关闭文件
                fs.close(fd, function(err){
                    if (err){
                    console.log(err);
                    } 
                    console.log("文件关闭成功！");
                });
            });
        });
    });
}
// fileCut();

/**
 * 删除文件
 */
function fileRemove() {
    console.log("准备删除文件！");
    fs.unlink('input.txt', function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("文件删除成功！");
    });
}
// fileRemove();

/**
 * 创建目录
 */
function createDir() {
    // tmp 目录必须存在
    console.log("创建目录 /tmp/test/");
    fs.mkdir(__dirname + "/tmp/test/",function(err){
        if (err) {
            return console.error(err);
        }
        console.log("目录创建成功。");
    });
}
// createDir();

function readDir() {
    console.log("查看 /tmp 目录: ", __dirname);
    fs.readdir(__dirname + "/tmp/",function(err, files){
        if (err) {
            return console.error(err);
        }
        files.forEach( function (file){
            console.log( file );
            fs.stat(__dirname + '/tmp/' + file, function (err, stats) {
                if (err)
                {
                    return console.error(err);
                }
                console.log("isDir: ", stats.isDirectory());
                console.log("isFile: ", stats.isFile());
            });
        });
    });
}
readDir();