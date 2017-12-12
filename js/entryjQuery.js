(function($){
	$("#count").bind("focus",function(){
		$("#phone").css({
			display:"none"
		})
	})
	$("#count1").bind("focus",function(){
		$("#phone2").css({
			display:"none"
		})
	})
	
	
	
	
	$("#passward").bind("focus",function(){
		$("#phone1").css({
			display:"none"
		})
	})
	
	$(".a2").bind("click",function(){
		$(".two").css({
			display:"block"
		})
		$(".one").css({
			display:"none"
		})
		
		$(".a2").css({
			color: "black",
            borderBottom: "4px solid black"
		})
		$(".a1").css({
			color: "#DDD",
            borderBottom: "none"
		})
	})
	
	$(".a1").bind("click",function(){
		$(".one").css({
			display:"block"
		})
		$(".two").css({
			display:"none"
		})
		
		
		$(".a1").css({
			color: "black",
            borderBottom: "4px solid black"
		})
		$(".a2").css({
			color: "#DDD",
            borderBottom: "none"
		})
	})
	
	
	
	
})(jQuery)
