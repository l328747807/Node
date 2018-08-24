/**  Created by  Lin/lkhls@qq.com on 2018/8/24 14:59*/
//用exports 暴露方法
exports.showIndex = showIndex;
exports.showStudent = showStudent;
exports.show404 = show404;
function showIndex(req,res) {
	res.writeHead(200, {"Content-Type": "text/html;charset=UTF8"});
	res.end("我是首页");
}

function showStudent(req,res) {
	const id = req.url.substr(9,6);
	res.writeHead(200, {"Content-Type": "text/html;charset=UTF8"});
	res.end("我是"+id+"学生");
}

function show404(req,res) {
	res.writeHead(200, {"Content-Type": "text/html;charset=UTF8"});
	res.end("404");
}