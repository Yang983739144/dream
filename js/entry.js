
	  var count = document.getElementById("count")
       count.onblur = function(){
       	  
         
       //获取到了用户名的值

       var count1 = document.getElementById("count").value;

       var span = document.getElementById("span");

//     var reg = /^[a-z][a-z0-9]{5}$/i;
       var reg =  /^1[34578]\d{9}$/;

       if(reg.test(count1)){

           //符合规则 

           span.innerHTML="正确".fontcolor("green");

           return true;

       }else{

           //不符合规则

           span.innerHTML="用户名格式错误".fontcolor("red");

           return false;

       }  

}
       






	  var passward = document.getElementById("passward")
       passward.onblur = function(){
       	  
         
       //获取到了用户名的值

       var passward1 = document.getElementById("passward").value;

       var span1 = document.getElementById("span1");

//     var reg = /^[a-z][a-z0-9]{5}$/i;
       var reg = /^[\w]{6,12}$/;

       if(reg.test(passward1)){

           //符合规则 

           span1.innerHTML="正确".fontcolor("green");

           return true;

       }else{

           //不符合规则

           span1.innerHTML="密码格式错误".fontcolor("red");

           return false;

       }  

}
       
       
       
       
	  var countent = document.getElementById("count1")
       countent.onblur = function(){
       	  
         
       //获取到了用户名的值

       var counten = document.getElementById("count1").value;

       var span = document.getElementById("span2");

//     var reg = /^[a-z][a-z0-9]{5}$/i;
       var reg =  /^1[34578]\d{9}$/;

       if(reg.test(counten)){

           //符合规则 

           span.innerHTML="正确".fontcolor("green");

           return true;

       }else{

           //不符合规则

           span.innerHTML="用户名格式错误".fontcolor("red");

           return false;

       }  

}
       
       


