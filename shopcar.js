(function($){
	$(".close1-1").bind("click",function(){
		$(".top1").css({
			display:"none"
		})
	})
	
	
	$(".weixin1").bind("mouseenter",function(){
		$(".weixin1-1").css({
			display:"block"
		})
	})
	
	$(".weixin1").bind("mouseleave",function(){
		$(".weixin1-1").css({
			display:"none"
		})
	})
	$(".weibo1").bind("mouseenter",function(){
		$(".weibo1-1").css({
			display:"block"
		})
	})
	
	$(".weibo1").bind("mouseleave",function(){
		$(".weibo1-1").css({
			display:"none"
		})
	})
	
	$(".phone1").bind("mouseenter",function(){
		$(".phone1-1").css({
			display:"block"
		})
	})
	
	$(".phone1").bind("mouseleave",function(){
		$(".phone1-1").css({
			display:"none"
		})
	})
	
	$(".all1").bind("mouseenter",function(){
		$(".all-wrap").css({
			display:"block"
		})
	})
	
	$(".all-wrap").bind("mouseleave",function(){
		$(".all-wrap").css({
			display:"none"
		})
	})
})(jQuery)
