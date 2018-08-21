/**  Created by  Lin/lkhls@qq.com on 2018/8/20 15:09*/
//require表示引包，引包就是引用自己的一个 特殊功能
const http = require("http");
//创建服务器，参数是一个回调函数，表示如果有请求进来，要做什么
const server = http.createServer(function (req,res) {
    //req表示请求，request;res表示响应，response
	//设置HTTP头部，状态码是200，文件类型是html，字符集是utf8
	res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
	res.end("哈哈哈，这是我的第一个Node页面")
});

//运行服务器，监听3000端口(端口号可以任意改)
    server.listen(3000,"10.131.103.159");
