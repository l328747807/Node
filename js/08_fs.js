const http = require("http");
const fs =require("fs");

const server =http.createServer(function (req,res) {
	const userid = parseInt(Math.random() * 89999 + 10000);
	console.log("欢迎" + userid);
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
	fs.readFile("../text/1.txt",function (err,data) {
		if(err){
			throw err;
		}
		//console.log(data);
		res.end(data);
		console.log(userid +"文件读取完毕");
	})
});

server.listen(3000,"127.0.0.1");