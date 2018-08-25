/**  Created by  Lin/lkhls@qq.com on 2018/8/22 16:26*/
	let msg = "你好!";
	let info = "呵呵";
	function ShowInfo(){
		console.log(info);
}

	//暴露exports
	exports.msg = msg;
	exports.info = info;
	exports.ShowInfo = ShowInfo;