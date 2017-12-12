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

	$(".li1").bind("click",function(){
		$(".one").css({
			display:"block"
		})
		
		$(".two").css({
			display:"none"
		})
		$(".three").css({
			display:"none"
		}) 
		$(".li1").addClass("li1")
		$(".li2").css({
			background:"",
			borderTop:"none"
		})
		$(".li3").css({
			background:"",
			borderTop:"none"
		})
		
	
	})
	$(".li2").bind("click",function(){
		$(".two").css({
			display:"block"
		})
		$(".one").css({
			display:"none"
		})
		$(".three").css({
			display:"none"
		})
		$(".li2").css({
			background:"white",
			borderTop:"2px solid #e60060"
		})
		$(".li1").removeClass("li1")
		$(".li3").css({
			background:"",
			borderTop:"none"
		})
	
	})
	$(".li3").bind("click",function(){
		$(".three").css({
			display:"block"
		})
		$(".one").css({
			display:"none"
		})
		$(".two").css({
			display:"none"
		})
		
		$(".li3").css({
			background:"white",
			borderTop:"2px solid #e60060"
		})
		$(".li1").removeClass("li1")
		$(".li2").css({
			background:"",
			borderTop:"none"
		})
	
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
	
	
	$("#li1").bind("mouseenter",function(){
		$("#img-erweima").css({
			display:"block"
		})
		$("#li1").css({
			backgroundColor:"gray"
		})
	})
	$("#li1").bind("mouseleave",function(){
		$("#img-erweima").css({
			display:"none"
		})
		$("#li1").css({
			backgroundColor:""
		})
	})
	
	
	
	
	
	
	window.onscroll = function(){

			var Ntop = document.documentElement.scrollTop;
			
			if(Ntop>1300){
				document.getElementById("fly").style.display="block";
			}else{
				document.getElementById("fly").style.display="none";

			}
		}

	
	
	
	
	
})(jQuery)
