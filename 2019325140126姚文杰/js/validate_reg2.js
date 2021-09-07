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
	window.document.getElementById("prompt_user_password").innerHTML = "密码不能少于六位";
}
//输入框失去焦点时检查用户输入的值是否符合要求
function blur_user_password(){
	//获取密码
	var start;
	var pd = document.getElementById("user_password").value;
	//使用正则表达式匹配密码
	if(pd.search("^.{6,}$") == -1) {
		window.document.getElementById("prompt_user_password").innerHTML = "不符合密码规则！";
		start=false;
	} else {
		window.document.getElementById("prompt_user_password").innerHTML = "<label style='color:green'>ok</label>";
		start=true;
	}
	return start;

}




function clickInfo(){
	
	var result = blur_user_name();
	var result1 = blur_user_password();
//	result&&result1&&result2&&result3
	if(result&&result1){
		alert("登陆成功");
		window.location.href = "../gouwuche/gouwuche.html";
	}else{
		alert("输入有误，请重新输入");
	}
}

function registerButton(){
		window.location.href = "../mebership/register.html";
}

