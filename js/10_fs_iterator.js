/**  Created by  Lin/lkhls@qq.com on 2018/8/21 15:28
 * 异步变同步
 * */
const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req,res) {
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"})
	//不处理小图标
	if(req.url == "/favicon.ico"){
		return;
	}
	//遍历album里面所有的文件、文件夹
	fs.readdir("../album/",function (err,files) {
		if (err){
			return err;
		}
		//files是一个存放文件（夹）名的数组
		//存放文件夹的数组
		let wenjianjia = [];
		//迭代器是强行把异步变成同步
		(function iterator(i) {
			//遍历结束
			if (i == files.length){
				console.log(wenjianjia);
				return;
			}
			//检测成功后运行的程序
			fs.stat("../album/" + files[i],function (err,stats) {
				if (err){throw err};
				if (stats.isDirectory()){
					wenjianjia.push(files[i]);
				}
				//迭代 i + 1
				iterator(i+1);
			})

		})(0)
	});
	res.end();
});

	server.listen(3000,"127.0.0.1");