function $(id){
	return document.getElementById(id);
}


function AddZero(str){
	if(str<10){
		return '0'+str;
	}else{
		return str;
	}
}


function gettime(){
	var endtime=new Date("2020-12-31 23:59:59");
	var nowtime=new Date();
	var t=endtime.getTime()-nowtime.getTime();
	var d=0;
	var h=0;
	var m=0;
	var s=0;
	if(t>=0){    
		d=Math.floor(t/1000/60/60/24);     
		h=Math.floor(t/1000/60/60%24);    
		m=Math.floor(t/1000/60%60);      
		s=Math.floor(t/1000%60); 

		d=AddZero(d); 
		h=AddZero(h); 
		m=AddZero(m);
		s=AddZero(s);  
	}  
	$('t-d').innerHTML=d;
	$('t-h').innerHTML=h;
	$('t-m').innerHTML=m;
	$('t-s').innerHTML=s;

}

window.onload = function(){
	setInterval(gettime, 0);
}	


