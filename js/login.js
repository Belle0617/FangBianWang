var timmer;
$(function() {
	//  获取验证码界面
	var count = localStorage.count;
	var username = localStorage.getItem("username" + count);
	$("#phoneNumber").html(username);
	//	申请验证码
	$("#testRadomCodeInfo").hide();
	$("#applyRadomCode").on("click", function() {
		timmer=setInterval(doApply, 1000);
		setTimeout(timeDelay, 2000); //申请验证码并延时显示
		return timmer;
	});
	//	验证
	$("#doSubmit").on("click", function() {
		$("#applyRadomCode").get(0).disabled=true;
		checkTestCode();
	});
});

//验证界面
var countDown = 15;

function doApply() {
	if(countDown > 0) {
		$("#applyRadomCode").get(0).value = (countDown--) + "秒重新发送";
	} else {
		$("#testRadomCodeInfo").hide();//隐藏之前获取的验证码
		countDown = 15;//倒计时重置
		$("#applyRadomCode").get(0).disabled=false;
		$("#applyRadomCode").get(0).value="点击重新发送";
		clearInterval(timmer);
		$("#testRadomCode").css("border", "1px solid #e8e8e8");
	}

}
//延时显示验证码
function timeDelay() {
	generateRandomCode();
	$("#testRadomCodeInfo").show();
}
//获取验证码
function generateRandomCode() {
	var str = "";
	for(var i = 1; i <= 4; i++) {
		var n = Math.floor(Math.random() * 62);
		if(n < 10) {
			str += n;
		} else if(n < 36) {
			str += String.fromCharCode(65 + n - 10);
		} else {
			str += String.fromCharCode(97 + n - 36);
		}
	}
	$("#testRadomCodeInfo").html(str);
	console.log($("#testRadomCodeInfo").html());
}
//提交注册
function checkTestCode() {
	var radomcode = $("#testRadomCode").get(0).value;
	var testCode=$("#testRadomCodeInfo").html();
	if(radomcode.toUpperCase() == testCode.toUpperCase()) {
		alert("即将跳转!");
		location.href = "success.html";
	} else {
		$("#testRadomCode").css("border", "1px solid red");//错误提示
	}
}