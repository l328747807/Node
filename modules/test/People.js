/**  Created by  Lin/lkhls@qq.com on 2018/8/22 17:11*/

function People(name,age,sex) {
	this.name = name;
	this.age = age;
	this.sex = sex;
}

People.prototype = {
	sayHello : function () {
		console.log(this.name + "say Hello");
	}
};

//此时，People被视为构造函数
module.exports = People;
