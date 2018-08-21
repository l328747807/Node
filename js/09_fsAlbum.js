/**  Created by  Lin/lkhls@qq.com on 2018/8/21 14:21*/
const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req,res) {
	res.writeHead(200,{"Content-Type":"text/html;charset = UTF8"});
	//不处理小图标
	if (req.url == "/favicon.ico"){
		return;
	}
	//stat 检测状态
	let wenjianjia = [];
	fs.readdir("../album",function (err,files) {
		//处理异常
		if (err){
			throw err;
		}
		//files是个数组，表示 ../album 文件夹中的所有东西
		//包括文件，文件夹
		//console.log(files);
		for (let i = 0; i <files.length; i++){
			let thefilename = files[i];
		    fs.stat("../album/" + thefilename , function (err,status) {
		//判断是文件夹，则输出文件夹名称
		    	if (status.isDirectory()){
			    	wenjianjia.push(thefilename);
				    console.log(thefilename);
			    }
		    });
		}
	})
});


server.listen(3000,"127.0.0.1");