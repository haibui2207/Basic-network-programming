+function($){		
	$("#btn-signin").click(function(){
		var username = $("#username").val();
		var password = $("#password").val();
		if(username == "")
		{
			document.getElementById("IsUsername").innerHTML = "Do not leave empty";			
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
	$("#username").on("click",function(){
		document.getElementById("IsUsername").innerHTML = "";
	});
	$("#password").on("click",function(){
		document.getElementById("IsPassword").innerHTML = "";
	});	
}(jQuery);
