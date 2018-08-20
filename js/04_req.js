/**  Created by  Lin/lkhls@qq.com on 2018/8/20 18:15*/
var http = require("http");
var server = http.createServer(function (req,res) {
	console.log(req.url);
	res.end();
}).listen(3000,"127.0.0.1");