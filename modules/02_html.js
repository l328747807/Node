/**  Created by  Lin/lkhls@qq.com on 2018/8/21 17:26*/
const http = require("http");

const server = http.createServer(function (req,res) {
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
	if (req.url == "/lin/"){
		res.write("<ul>");
		res.write("<li>你</li>");
		res.write("<li>最</li>");
		res.write("<li>好</li>");
		res.write("<li>了</li>");
		res.write("</ul>");
		res.end("success");
	}else{
		res.end("fail")
	}

});

server.listen(3000,"127.0.0.1"); 