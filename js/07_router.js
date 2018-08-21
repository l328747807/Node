const http = require("http");
const server = http.createServer(function (req,res) {
	res.writeHead(200,{"Content-Type":"text/html;charset = UTF-8"});
	//得到url
	const userurl = req.url;

	//substr函数来判断此时的开头
	if(userurl.substr(0,9) == "/student/"){
		const studendid =userurl.substr(9);
		if (/\d{10}/.test(studendid)) {
			res.end("你要查询的学生学号为："+studendid);
		}else{
			res.end("学生学号位数不正确");
		}
	}else if(userurl.substr(0,9) == "/teacher/"){
		const teacher =userurl.substr(9);
		if (/^\d{6}$/.test(teacher)) {
			res.end("你要查询的老师学号为："+teacher);
		}else{
			res.end("老师学号位数不正确");
		}
	}else{
		res.end("url不正确，请检查url");
	}

}).listen(3000,'127.0.0.1');