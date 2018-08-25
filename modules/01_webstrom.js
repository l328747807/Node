/**  Created by  Lin/lkhls@qq.com on 2018/8/21 17:26*/
const http = require("http");

const server = http.createServer(function (req,res) {
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
	res.end("success");
});

server.listen(3000,"127.0.0.1"); 