$(function () {
        $("#register-submit").click(function () {
        	var username = $("#username").val();
        	var email = $("#email").val();
            var password = $("#password").val();
            var confirmPassword = $("#confirm-password").val();
            console.log(validateEmail(email));
            if (!validateEmail(email)) {
            	 $("#result_1").text("Email "+email + " is not valid ");
   				 if (password != confirmPassword) {
               		$("#result_2").text("Passwords do not match!");
                	return false;
            	 }
            	 else
            	 {
            	 	$("#result_2").text("");
            	 }

            }
            else
            {
                if (password != confirmPassword) {
                    $("#result_2").text("Passwords do not match!");
                    return false;
                 }
            	$("#result_1").text("");
            }
            return true;
        });
});
function validateEmail(email) {
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
}

