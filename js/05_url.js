/**  Created by  Lin/lkhls@qq.com on 2018/8/20 18:15*/
const http = require("http");
const url = require("url");
const server = http.createServer(function (req,res) {
	const pathname = url.parse(req.url).pathname;
	const query = url.parse(req.url,true).query;
	const age = query.age;
	/*console.log("pathname:" + pathname);
	console.log("query:" + query);
	console.log("age:" + age);*/
	console.log(pathname);
	console.log(query);
	console.log(age);
	res.end();
}).listen(3000,"127.0.0.1");