(function($){
	// Login user ---
	$("#login-button").on("click",function(e){
		e.preventDefault();
		var redirect = "dashboard.php";
		window.location.assign(redirect);
	});
	// ---

	//Size page
	if($("#slide-box-placement").length > 0){
		var body_container = $("#body-site");
		var get_size = Number($("#container").height()) + Number($("#slide-box-placement").height());
		body_container.css({"height":get_size});
	}
	// end ---

	//login focus
	var login_input = $("input[name='user-login-name']");
	if(login_input.length > 0)
		login_input.focus();
	// end ---
})(jQuery)