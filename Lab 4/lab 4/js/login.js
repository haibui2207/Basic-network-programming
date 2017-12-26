+function($){		
	$("#btn-signin").click(function(){
		var email = $("#email").val();
		var password = $("#password").val();
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
		return true;
	});
}(jQuery);

+function($){
	$("#email").on("click",function(){
		document.getElementById("IsEmail").innerHTML = "";
	});
	$("#password").on("click",function(){
		document.getElementById("IsPassword").innerHTML = "";
	});	
}(jQuery);
