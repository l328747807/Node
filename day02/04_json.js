/**  Created by  Lin/lkhls@qq.com on 2018/8/21 17:26*/
const http =require("http");
const fs = require("fs");
const url = require("url");
const path =require("path");


const server = http.createServer(function (req,res) {
	//得到地址
	let pathname = url.parse(req.url).pathname;
	//输入的网址是127.0.0.1/images/logo.png
	//实际输出的是../static/logo.png
	if (pathname.indexOf(".") == -1){
		pathname += "/index.html"
	}
	let fileURL = path.normalize("../static/" + pathname);
	//console.log(fileURL);

	//得到拓展名
	let extname =path.extname(pathname);


	//把文件读出来
	fs.readFile(fileURL,function (err,data) {
		if (err){
			res.writeHead(404,{"Content-Type":"text/html;charset=UTF8"});
			res.end("404,页面没有找到");

		}
		//回调获取拓展名
		getMime(extname,function (mime) {
			res.writeHead(200,{"Content-Type": mime});
			res.end(data);
		});

	})
});

server.listen(80,"127.0.0.1");

function getMime(extname,callback) {
	fs.readFile("./mime.json",function (err,data) {
		if (err){throw Error("找不到mine.json文件")}
		let mimeJSON =JSON.parse(data);
		//设置参数和默认值
		let mime = mimeJSON[extname] || "text/plain";
		//执行回调函数
		callback(mime);
	})

}