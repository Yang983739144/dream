<?php
    header("Content-type:text/html;charset=utf-8;");
    //一、接收前端数据
    $username = $_POST['username'];
    $userpass = $_POST['userpass'];

    //二、处理

    //1、链接数据库（搭桥）
    $conn = mysql_connect("localhost","root","root");
    
    //2、选择数据库（目的地）
    mysql_select_db("mydb1708",$conn);

    //3、数据库操作
    //3.1查找用户名是否存在
    $sqlStr="select * from vip where username='".$username."' and userpass='".$userpass."'";
    $result = mysql_query($sqlStr,$conn);
    //行数;
    $rows = mysql_num_rows($result);
    //4、关闭数据库
    mysql_close($conn);
    //三、响应
    if($rows==0){
        echo "用户名或密码错误";
    }else{
//  	echo "window.localtion='index.html'"
//      echo "登录成功<a href='index.html'>首页</a>";

        header("Location:index.html");
    }

?>