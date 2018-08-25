/**  Created by  Lin/lkhls@qq.com on 2018/8/24 14:46*/
const fs = require("fs");

//__dirname当前文件所在目录  同目录下加  /02_html.js 就可以读出其绝对路径
fs.readFile(__dirname + "/02_html.js",function (err,data) {
	if(err){
		throw err;
	}

	console.log(data.toString());
});