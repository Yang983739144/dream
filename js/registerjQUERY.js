(function($){
	$(".in1").bind("focus",function(){
		$(".p1").css({
			display:"none"
		})
	})
	$(".in1").bind("blur",function(){
		if($(".in1").val()==""){
		$(".p1").css({
			display:"block"
		})
	    }
	})
	$(".in2").bind("focus",function(){
		$(".p2").css({
			display:"none"
		})
	})
	$(".in2").bind("blur",function(){
		if($(".in2").val()==""){
		$(".p2").css({
			display:"block"
		})
	    }
	})
	$(".in3").bind("focus",function(){
		$(".p3").css({
			display:"none"
		})
	})
	$(".in3").bind("blur",function(){
		if($(".in3").val()==""){
		$(".p3").css({
			display:"block"
		})
	    }
	})
	$(".in4").bind("focus",function(){
		$(".p4").css({
			display:"none"
		})
	})
	$(".in4").bind("blur",function(){
		if($(".in4").val()==""){
		$(".p4").css({
			display:"block"
		})
	    }
	})
	
	
	
	
	
	
	
	
	
})(jQuery)
