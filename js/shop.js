$(function(){
	$("#remove").click(function(){
		let num1 = Number($(this).parent().next().text());
		let price1 = Number($(this).parents("#num").prev("#price").find("span").text());
		let oldTatolprice1  = Number($(this).parents("#num").next("#addprice").find("span").text());
		let tatolprice1 = oldTatolprice1-price1;
		
		
		if(num1>1){
			$(this).parent().next().text(num1-1);
			$(this).parents("#num").next("#addprice").find("span").text(tatolprice1);
			$("#lastprice").html(tatolprice1)
		}
	})
	$("#add").click(function(){
		let num = Number($(this).parent().prev().text());
		let price = Number($(this).parents("#num").prev("#price").find("span").text());
		let oldTatolprice  = Number($(this).parents("#num").next("#addprice").find("span").text());
		let tatolprice = oldTatolprice+price;
		
		$(this).parent().prev().text(num+1);
		$(this).parents("#num").next("#addprice").find("span").text(tatolprice);
		$("#lastprice").html(tatolprice)
	})
})

window.onload = function(){
	var li = document.getElementById("li1")
	var close = document.getElementById("close")
	close.onclick = function(){
		alert("你确定要删掉")
		li.style.display = "none"
	}
}

window.onscroll = function(){

			var Ntop = document.documentElement.scrollTop;
			
			if(Ntop>200){
				document.getElementById("bottom").style.display="block";
			}else{
				document.getElementById("bottom").style.display="none";

			}
		}
