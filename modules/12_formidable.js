/**  Created by  Lin/lkhls@qq.com on 2018/8/24 14:09*/
const http = require("http");
const queryString = require("querystring");
const formidable = require("formidable");


const server = http.createServer(function (req,res) {
	//post请求提交
	//如果访问类型是 post ，请求地址是这个
	if(req.url == "/dopost" && req.method.toLowerCase() == "post"){
	//Creates a new incoming form
		let form = new formidable.IncomingForm();
		form.uploadDir = "./uploads";
		form.parse(req, function (err, fields, files) {
			console.log(files);
			console.log(fields);
			//所有的文本域、单选框都在fields存放
			//所有的文件域，files
			res.writeHead(200,{"Content-Type":"text/html;chartset=UTF8"});
			res.end("success");
		})
	}

});


server.listen(80,"127.0.0.1");