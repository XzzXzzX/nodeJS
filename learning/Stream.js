/**
 * 流数据
 * 
 * 
 * 常用事件
data - 当有数据可读时触发。

end - 没有更多的数据可读时触发。

error - 在接收和写入过程中发生错误时触发。

finish - 所有数据已被写入到底层系统时触发。
 */

 var fs = require("fs");

 /**
  * 从流中读取数据
  */
function ReadStream() {
    var data = '';

    // 从流中读取数据
    var readStream = fs.createReadStream("Input.txt");

    // 设置编码
    readStream.setEncoding("UTF8");

    // 处理流数据 data,end,error
    readStream.on('data', function (chunck) {
        data += chunck;
        console.log("[read data]:", chunck);
    });

    readStream.on('end', function() {
        console.log("[read end]:", data);
    });

    readStream.on('error', function(err) {
        console.log('[read error]:', err);
    });
}

/**
 * 写入流数据
 */
function WriteStream() {
    var data = 'This is a test about write stream to file.'

    var writeStream = fs.createWriteStream('Input.txt');
    writeStream.write(data, 'UTF8');
    // 文件末尾标记
    writeStream.end();

    // 流数据处理流程 finish, end, error
    writeStream.on('finish', function () {
        console.log("[write finish]");
    });

    writeStream.on('end', function() {
        console.log("[write end]");
    });

    writeStream.on('error', function(err) {
        console.log('[write error]:', err);
    });
}

/**
 * 管道流
 * 从一个文件流读取数据，写入到另一个文件流中。
 */
function PipeStream() {
    var readStream = fs.createReadStream('Input.txt');

    var writeStream = fs.createWriteStream('Output.txt');

    // 管道读写操作
    readStream.pipe(writeStream);
}


/**
 * 链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。
 * 压缩文件
 */
function ChainStreamZip() {
    var zlib = require("zlib");

    // 压缩文件为.gz
    var readStream = fs.createReadStream('Input.txt');
    var writeStream = readStream.pipe(zlib.createGzip());
    writeStream.pipe(fs.createWriteStream('Input.txt.gz'));

    console.log("文件压缩完成")
}
/**
 * 解压文件
 */
function ChainStreamUnzip() {
    var zlib = require("zlib");

    // 解压文件为txt
    fs.createReadStream('Input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('Input.txt'));
  
    console.log("文件解压完成。");
}

// WriteStream();
// PipeStream();
// ChainStreamZip();
ChainStreamUnzip();



console.log("run finished");