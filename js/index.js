(function($){
	$("#input1").bind("focus",function(){
	    $("#list").css({
	    	display:"block"
	    })
		$(this).val("")
	})
	$("#input1").bind("blur",function(){
	
		$(this).val("现在就是12.12价")
	})
	
	$("#span").bind("click",function(){
		$("#tan").css({
			display:"none"
		})
	})
	
	$("#tou").bind("mouseenter",function(){
		$("#tan").css({
			display:"block"
		})
	})
	$(".t1").bind("mouseleave",function(){
		$("#tan").css({
			display:"none"
		})
	})
	
	
	$(".car").bind("mouseenter",function(){
		$(".shop-car").css({
			display:"block"
		})
	})
	
	$(".car").bind("mouseleave",function(){
		$(".shop-car").css({
			display:"none"
		})
	})
	
	$(".aClose").bind("click",function(){
		$(".shop-car").css({
			display:"none"
		})
	})
	
	$(".xin").bind("mouseenter",function(){
		$(".wode").css({
			display:"block"
		})
	})
	$(".wei").bind("mouseleave",function(){
		$(".wode").css({
			display:"none"
		})
	})
	
	$(".we").bind("mouseenter",function(){
		$(".ma").css({
			display:"block"
		})
	})
	$(".wei").bind("mouseleave",function(){
		$(".ma").css({
			display:"none"
		})
	})
	$(".erji").bind("mouseenter",function(){
		$(".wode1").css({
			display:"block"
		})
	})
	$(".wei").bind("mouseleave",function(){
		$(".wode1").css({
			display:"none"
		})
	})
	
	$(".erweima").bind("mouseleave",function(){
		$(".imgli").css({
			display:"none"
		})
		$(".erweima").css({
			background:""
		})
	})
	
	$(".erweima").bind("mouseenter",function(){
		$(".imgli").css({
			display:"block"
		})
		
	})
	
	$(".erweima").css({
			background:"#c10055"
		})
	

		window.onscroll = function(){

			var Ntop = document.documentElement.scrollTop;
			
			if(Ntop>1300){
				document.getElementById("fly").style.display="block";
			}else{
				document.getElementById("fly").style.display="none";

			}
		}
		window.onscroll = function(){

			var Ntop = document.documentElement.scrollTop;
			
			if(Ntop>200){
				document.getElementById("img1").style.display="block";
			}else{
				document.getElementById("img1").style.display="none";

			}
		}
	
})(jQuery)
