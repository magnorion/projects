(function($){
	// Login user ---
	$("#login-button").on("click",function(e){
		e.preventDefault();
		var redirect = "dashboard.html";
		window.location.assign(redirect);
	});
	// ---

	//Data footer
	var date = new Date();
	$("#logo-footer span").text(date.getFullYear());
	// ---
})(jQuery)