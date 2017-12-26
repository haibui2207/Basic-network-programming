+function($){		
	$("#btn-signup").click(function(){
		var username = $("#username").val();
		var email = $("#email").val();
		var password = $("#password").val();
		var confirmpassword = $("#confirm-password").val();
		if(username == "")
		{
			document.getElementById("IsUsername").innerHTML = "Do not leave empty";			
			return false;
		}
		if(email == "")
		{
			document.getElementById("IsEmail").innerHTML = "Do not leave empty";			
			return false;
		}	
		if(password == "")
		{
			document.getElementById("IsPassword").innerHTML = "Do not leave empty";		
			return false;
		}
		if(confirmpassword != password)
		{
			document.getElementById("IsConfirm-password").innerHTML = "Password incorrect";		
			return false;
		}
		return true;
	});
}(jQuery);

+function($){
	$("#username").on("click",function(){
		document.getElementById("IsUsername").innerHTML = "";
	});
	$("#email").on("click",function(){
		document.getElementById("IsEmail").innerHTML = "";
	});
	$("#password").on("click",function(){
		document.getElementById("IsPassword").innerHTML = "";
	});
	$("#confirm-password").on("click",function(){
		document.getElementById("IsConfirm-password").innerHTML = "";
	});
}(jQuery);
