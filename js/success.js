var flag=true;
$(function() {
//成功界面
	var count = localStorage.count;
	var username = localStorage.getItem("username" + count);
	$("#success-number").html(username);

//点击立即登录弹出登陆界面
	$("#doRegistered").click(function() {
			$(".over").show("500");
			$(".pwdlogin").show("500");
		})
//点击切换登录模式
	$(".pwdlg").click(function() {
		$(".pwdlogin").show();
		$(".codelogin").hide();
	})
	$(".codelg").click(function() {
			$(".pwdlogin").hide();
			$(".codelogin").show();
		})
//点击弹窗其他地方关闭弹窗
	n = 0;
	$(".pwdlogin").parent().siblings().click(function() {
			n++;
			if(n >= 2) {
				$(".over").hide("500");
				$(".pwdlogin").hide("500");
				n = 0;
			}
		})
//验证帐号密码是否一致
	$(".pwdo").blur(function() {
			flag = checkphonepwd();
		})
//点击登录按钮判断转入成功页面
	$(".login1").click(function() {
		if(flag) {
			location.href = "over.html";
		}
	})
})

//验证帐号密码是否一致
var count = localStorage.count;
function checkphonepwd() {
	var phone = $(".phoneo").val();
	var password = $(".pwdo").val();
	for(var i = 1; i <= count; i++) {
		var ph = localStorage.getItem("username" + i);
		var pwd = localStorage.getItem("password" + i);
		if((phone == ph) && (password == pwd)) {
			$(".errorshow").slideUp("300");
			return true;
		}
	}
//	错误提示
	$(".errorshow").slideDown("300");
	return false;
}
