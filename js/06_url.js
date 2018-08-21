/**  Created by  Lin/lkhls@qq.com on 2018/8/20 18:15*/
const http = require("http");
const url = require("url");
const server = http.createServer(function (req,res) {
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
	const query = url.parse(req.url,true).query;
	const name = query.name;
	const age = query.age;
	const sex = query.sex;

//	console.log(pathname);
	console.log(query);
	console.log(age);
	res.end("服务器接受到请求：name:"+name+"</n>age:"+age+"</n>sex:"+sex);
}).listen(3000,"127.0.0.1");