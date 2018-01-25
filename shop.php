<?php

	 header("Content-type: text/html; charset=utf-8");
	//1、接收客户端的数据
	$userName = $_GET['userId'];
	$userPass = $_GET['userPass'];
	
	//2、判断
	if($userName=='15249000260' && $userPass=='yangyang'){
		//3、响应 
		echo "1";//验证通过
	}else{
		//3、响应
		echo "0";//验证失败
	}
	