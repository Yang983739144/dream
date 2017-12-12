var btn1 = document.getElementById("btn1")
btn1.onblur = function() {
	var count1 = document.getElementById("btn1").value;
	var span = document.getElementById("span1");
	var reg = /^.{6,}@.+\..+$/;

	if(reg.test(count1)) {
		span.innerHTML = "正确".fontcolor("green");
		return true;
	} else {
		span.innerHTML = "邮箱格式错误".fontcolor("red");
		return false;

	}

}

var btn2 = document.getElementById("btn2")
btn2.onblur = function() {
	var count1 = document.getElementById("btn2").value;
	var span = document.getElementById("span2");
	var reg =  /^1[34578]\d{9}$/;

	if(reg.test(count1)) {
		span.innerHTML = "正确".fontcolor("green");
		return true;
	} else {
		span.innerHTML = "手机号格式错误".fontcolor("red");
		return false;

	}

}





var btn3 = document.getElementById("btn3")

btn3.onblur = function() {
	
	var count1 = document.getElementById("btn3").value;
	var span = document.getElementById("span3");
	var reg = /^[\w]{6,12}$/;

	if(reg.test(count1)) {
		span.innerHTML = "正确".fontcolor("green");
		return true;
	} else {
		span.innerHTML = "密码格式错误".fontcolor("red");
		return false;

	}

}



var btn4 = document.getElementById("btn4")
btn4.onblur = function() {
	var count3 = document.getElementById("btn3").value;
	var count1 = document.getElementById("btn4").value;
	var span = document.getElementById("span4");


	if(count1==count3) {
		console.log(count3)
		span.innerHTML = "正确".fontcolor("green");
		return true;
	} else {
		span.innerHTML = "两次密码不一致".fontcolor("red");
		return false;

	}

}