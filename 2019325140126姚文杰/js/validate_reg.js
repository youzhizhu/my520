// JavaScript Document
function focus_user_name() {
	window.document.getElementById("prompt_user_name").innerHTML = "3-16位可以为汉字、数字、字母（大小写）、下划线";
}

function blur_user_name() {
	var start;
//	var user_name = window.document.register.user_name.value;
	var user = document.getElementById("user_name").value;
//	/0-9a-zA-Z\u4e00-\u9fa5_]{3,16}$/
	if(user.search("^[0-9a-zA-Z\u4e00-\u9fa5_]{3,16}$") == -1) {
		window.document.getElementById("prompt_user_name").innerHTML = "不符合用户名填写规则！";
		start=false;
	} else {
		window.document.getElementById("prompt_user_name").innerHTML = "<label style='color:green'>ok</label>";
		start=true;
	}
	
	return start;

}


//鼠标获取焦点时，显示提示文字
function focus_user_password(){
	window.document.getElementById("prompt_user_pw").innerHTML = "密码不能少于六位";
}
//输入框失去焦点时检查用户输入的值是否符合要求
function blur_user_password(){
	//获取密码
	var start;
	var pd = document.getElementById("user_password").value;
	//使用正则表达式匹配密码
	if(pd.search("^.{6,}$") == -1) {
		window.document.getElementById("prompt_user_pw").innerHTML = "不符合密码规则！";
		start=false;
	} else {
		window.document.getElementById("prompt_user_pw").innerHTML = "<label style='color:green'>ok</label>";
		start=true;
	}
	return start;

}

//获取确认密码 当焦点失去比较密码是否一致
function blur_user_repassword(){
	var start;
	//密码
	var user_password = document.getElementById("user_password").value;
	//确认密码
	var user_repassword = document.getElementById("user_repassword").value;
    //比较密码是否一致
	if(user_repassword.search("^.{6,}$") == -1) {
		window.document.getElementById("prompt_user_password").innerHTML = "不符合密码规则！";
		start=false;
	/*} else {
		window.document.getElementById("prompt_user_password").innerHTML = "<label style='color:green'>ok</label>";
		start=true;*/
	/*}
	return start;*/
	}
	
    else if(user_password == user_repassword){
		
    	window.document.getElementById("prompt_user_password").innerHTML = "<label style='color:green'>ok</label>";
    	start=true;
    }
    else{
    	window.document.getElementById("prompt_user_password").innerHTML = "密码输入不一致，请重新输入！"
    	start=false;
	}
    return start;
}
  

//检测邮箱
//prompt_user_email
function blur_user_email(){
	var start;
	var user_email = document.getElementById("user_email").value;
	//判断邮箱格式是否正确
	if (user_email.search("^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$") != -1){
		document.getElementById("prompt_user_email").innerHTML = "<label style='color:green'>邮箱格式正确</label>";
		start=true;
	}else{
		document.getElementById("prompt_user_email").innerHTML = "邮箱格式不正确 请重新输入！";
		start=false;
	}
	return start;
}

function clickInfo(){
	
	/*var result = blur_user_name();
	var result1 = blur_user_password();
	var result2 = blur_user_repassword();
	var result3 = blur_user_email();*/
//	result&&result1&&result2&&result3
	/*if(result&&result1&&result2&&result3){*/
		window.location.href = "../mebership/login.html";
	/*}else{
		alert("请先注册");
	}*/
}

function registerButton(){
	var result = blur_user_name();
	var result1 = blur_user_password();
	var result2 = blur_user_repassword();
	var result3 = blur_user_email();
//	result&&result1&&result2&&result3
	if(result&&result1&&result2&&result3){
		var user = document.getElementById("user_name").value;
		var pd = document.getElementById("user_password").value;
		var user_email = document.getElementById("user_email").value;
		alert("注册成功\n用户名："+user+"\n密码："+pd+"\n邮箱："+user_email);
		window.location.href = "../mebership/login.html";
	}else{
		alert("输入有误，请重新输入");
	}
}

