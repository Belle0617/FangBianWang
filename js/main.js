$(function(){
//	注册界面
    $("main .registered form p #icon-red").hide();
    $("main .registered form p span #icon-green").hide();
    $("main .registered form p span #icon-orange").hide();
    	

});

// 手机号码的格式、是否存在的验证
function checkUsername() {
        var flag = true;
        var username = $("#username").val();
        var reg = /^[1]\d{10}$/;
        if (reg.test(username)) {
            $("#username").siblings("#icon-red").hide();
            $("#username").siblings("#usernameInfo").children("#icon-orange").hide();
        		$("#username").siblings("#usernameInfo").children("#icon-green").show();
            flag = true;
        } else {
        		$("#username").siblings("#icon-red").show();
            $("#username").siblings("#usernameInfo").children("#icon-orange").show(); 
            $("#username").siblings("#usernameInfo").children("#icon-green").hide();         
            flag = false;
        }
     var count = localStorage.count;
     for (var i = 1; i <= count; i++) {
         var name = localStorage.getItem("username" + i);
         if (name == username) {
            $("#username").siblings("#icon-red").show();
            $("#username").siblings("#usernameInfo").children("#icon-orange").show(); 
            $("#username").siblings("#usernameInfo").children("#icon-green").hide();
            $("#usernameInfo #icon-orange").text("该手机号码已存在");
             return false;
         }
     }
    return flag;
}

// 密码格式验证
function checkPassword() {
        var flag = true;
        var password = $("#password").val();
        var reg = /^[a-zA-Z$][\w$\-]{5,13}$/;//6~14个字符，第一个为字母或者$
        if (reg.test(password)) {
            $("#password").siblings("#icon-red").hide();
            $("#password").siblings("#passwordInfo").children("#icon-orange").hide();
            $("#password").siblings("#passwordInfo").children("#icon-green").show();
            flag = true;
        } else {
            $("#password").siblings("#icon-red").show();
            $("#password").siblings("#passwordInfo").children("#icon-orange").show();
            $("#password").siblings("#passwordInfo").children("#icon-green").hide();
            flag = false;
        }
    return flag;
}

// 确认密码验证
function checkRepassword() {
        var flag = true;
        var repassword = $("#repassword").val();
        var password = $("#password").val();
        if (repassword == password) {
            $("#repassword").siblings("#icon-red").hide();
            $("#repassword").siblings("#repasswordInfo").children("#icon-orange").hide();
            $("#repassword").siblings("#repasswordInfo").children("#icon-green").show();
            flag = true;
        } else {
            $("#repassword").siblings("#icon-red").show();
            $("#repassword").siblings("#repasswordInfo").children("#icon-orange").show();
            $("#repassword").siblings("#repasswordInfo").children("#icon-green").hide();
            flag = false;
        }
    return flag;
}

// 图形验证码
function checkCode() {
        var inputCode = $("#inputCode").val();
        var randomCodeCheck="nodick";
        if (randomCodeCheck == inputCode) {
            $("#inputCode").siblings("#icon-red").hide();
            $("#inputCode").siblings("#randomCodeInfo").children("#icon-orange").hide();
            $("#inputCode").siblings("#randomCodeInfo").children("#icon-green").show();
            return true;
        } else {
            $("#inputCode").siblings("#icon-red").show();
            $("#inputCode").siblings("#randomCodeInfo").children("#icon-orange").show();
            $("#inputCode").siblings("#randomCodeInfo").children("#icon-green").hide();
            return false;
        }
}

// 邮箱验证
function checkEmail() {
        var flag = true;
        var email = $("#email").val();
        var reg = /^[\w$\-]{1,9}\@[a-zA-Z1-9]{2,4}\.[a-zA-Z]{2,3}$/;//6~14个字符，第一个为字母或者$
        if (reg.test(email)) {
            $("#email").siblings("#icon-red").hide();
            $("#email").siblings("#emailInfo").children("#icon-orange").hide();
            $("#email").siblings("#emailInfo").children("#icon-green").show();
            flag = true;
        } else {
            $("#email").siblings("#icon-red").show();
            $("#email").siblings("#emailInfo").children("#icon-orange").show();
            $("#email").siblings("#emailInfo").children("#icon-green").hide();
            flag = false;
        }
    return flag;
}
// 同意协议
function checkAgreement(){
    var agreement = $("#agreement").get(0).checked ? true : false;
    if(agreement==true){
        $("#agreement").siblings("label").css("color","#000");
        return true;
    }else{
        $("#agreement").siblings("label").css("color","red");
        return false;       
    }
}
// 跳转验证
var arr=[checkUsername,checkPassword,checkRepassword,checkEmail,checkCode,checkAgreement];
function doRegist() {   
    var flag=true;
    for (var i in arr) {
        if (arr[i]() == true) {
            flag = true;
        } else {
            flag = false;
            break;
        }
    }
    if (flag == true) {
        var count = localStorage.count;
        if (!count) {
            count = 1
        } else {
            count++;
        }
        localStorage.setItem("username" + count, $("#username").val());
        localStorage.setItem("password" + count, $("#password").val());
        localStorage.setItem("email" + count, $("#email").val());
        localStorage.setItem("count", count);

        alert("即将跳转验证界面!");
        setTimeout(func, 500);
        
        }     
}

function func(){
    location.href = "login.html";
}



