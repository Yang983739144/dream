

window.onload = function(){
	var input1= document.getElementById("input1")
    var span1 = document.getElementById("span1")
    var input2 = document.getElementById("input2")
    var span2 = document.getElementById("span2")
    var  input3 = document.getElementById("input3")
    var spanemail = document.getElementById("spanemail")
    var input4 = document.getElementById("input4")
    var span3 = document.getElementById("span3")
    var input5 = document.getElementById("input5")
    var span5 = document.getElementById("span5")
    
    input1.onblur = function(){
   		if (input1.value==''){
   			span1.innerHTML = '请填写准确真实收货人姓名';
   		}
   		else {
   			span1.innerHTML='√';
   		}
    }
    
    var reg = /^\w{4,}$/

    input2.onblur = function(){
    	if(reg.test(input2.value)){
    		span2.innerHTML = "√"
    		return true
    	}
    	else{
    		span2.innerHTML = "请输入长度大于4个字符的详细地址"
    		return false
    	}
    }
    
    var reg2 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    input3.onblur = function(){
    	if(reg2.test(input3.value)){
    		spanemail.innerHTML = "√"
    		return true
    	}
    	else{
    		spanemail.innerHTML = "请输入正确的"
    		return false
    	}
    }
    
    var reg3 =/^1[34578]\d{9}$/;
    input4.onblur = function(){
    	if(reg3.test(input4.value)){
    		span3.innerHTML = "√"
    		return true
    	}
    	else{
    		span3.innerHTML = "请输入正确的手机号"
    		return false
    	}
    }
    
    var reg4 =/^1[34578]\d{9}$/;
    input5.onblur = function(){
    	if(reg4.test(input5.value)){
    		span5.innerHTML = "√"
    		return true
    	}
    	else{
    		span5.innerHTML = "请输入正确的手机号"
    		return false
    	}
    }
    
    
    
}
