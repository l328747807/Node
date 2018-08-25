/**  Created by  Lin/lkhls@qq.com on 2018/8/24 14:56*/
const http = require("http");
const router = require("./router");

//创建服务器

const server = http.createServer(function (req,res) {
	if (req.url == "/"){
		router.showIndex(req,res);
	}else if (req.url.substr(0,9) == "/student/"){
		router.showStudent(req,res);
	}else{
		router.show404(req,res);
	}

});
//监听服务器
server.listen(80,"127.0.0.1");