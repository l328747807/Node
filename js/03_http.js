/**  Created by  Lin/lkhls@qq.com on 2018/8/20 17:49*/
const http = require("http");

const server = http.createServer(function (req,res) {
	console.log("服务器接收到了请求");
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
	res.write("<h1>我是标题</h1>");
	res.end()
	}
).listen(3000,"127.0.0.1");