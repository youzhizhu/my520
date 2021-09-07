function reloop()
{
 var time = new Date( ); //获得当前时间
 //获得年、月、日，Date()函数中的月份是从0－11计算
 var year = time.getFullYear();  
 var month = time.getMonth()+1;
 var date = time.getDate();
var op;
 //获得小时、分钟、秒
 var hour = time.getHours();  
 var minute = time.getMinutes();
 var second = time.getSeconds();
 //获得一个星期中的第几天,西方的星期是从星期日开始，星期六结束
 var day = time.getDay();
 if (minute < 10) //如果分钟只有1位，补0显示
   minute="0"+minute;
 if (second < 10) //如果秒数只有1位，补0显示
   second="0"+second; 
	
var apm="AM"; //默认显示上午: AM
 if (hour>12) //按12小时制显示
 {
    hour=hour-12;
    apm="PM"  ;
 }
 var weekday = 0;
 switch(time.getDay())
{
    case 0:
  	weekday = "星期日";
	break;
    case 1:
  	weekday = "星期一";
	break;
	case 2:
  	weekday = "星期二";
	break;
	case 3:
  	weekday = "星期三";
	break;
	case 4:
  	weekday = "星期四";
	break;
	case 5:
  	weekday = "星期五";
	break;
	case 6:
  	weekday = "星期六";
	break;
 }
 op="今天是:"+year+"年"+month+"月"+date+"日"+weekday+":"+hour+":"+minute+":"+second+apm;

 
document.getElementById("t").innerHTML=op;
	setTimeout("reloop()",1000);
}