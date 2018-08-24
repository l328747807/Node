/**  Created by  Lin/lkhls@qq.com on 2018/8/24 14:09*/
const http = require("http");
const queryString = require("querystring");

const server = http.createServer(function (req,res) {
	//post请求提交
	//如果访问类型是 post ，请求地址是这个
	if(req.url == "/dopost" && req.method.toLowerCase() == "post"){
		//下面是post请求接收的一个公式
		//node为了追求极致，它是一个个小的chunk传输的
		//接收一小段，就去做别的事情，防止数据流太大堵塞线程

		let alldata = "";
		req.addListener("data",function (chunk) {
			alldata += chunk;
			//console.log(chunk);
		});
		//接受完毕
		req.addListener("end",function () {
			let dataString = alldata.toString();
			res.end("success");
			let dataObj = queryString.parse(dataString);
			console.log(dataObj);
			console.log(dataObj.name);
			console.log(dataObj.sex);
		})
	}


});


server.listen(80,"127.0.0.1");