(function($){
	// ########################### Global config ###################################
	
	// Config site
	var config = {
		postLimit: 2200
	};
	//end

	//label click
	var form = $("form");
	if(form.length > 0){
		form.find("label").each(function(){
			var self = $(this);
			self.on("click",function(){
				if(self.next().is("input[type='radio']")){
					self.next().attr("checked",true);
				}
			})
		});
	}
	//end ---

	//Size page
	if($("#slide-box-placement").length > 0){
		var body_container = $("#body-site");
		var get_size = Number($("#container").height()) + Number($("#slide-box-placement").height());
		body_container.css({"height":"auto","min-height":get_size});
	}
	if($(".action-box").length > 0){
		var counter_actions = Number($(".container-data").length);
		var sum = 384 * counter_actions;
		
		var already_size = $("#body-site").height();		
	}
	// end ---

	//logo
	var logo_footer = $("#logo-footer span");
	var dateObj = new Date();
	logo_footer.text(dateObj.getFullYear());
	// end ---

	//##############################################################################

	//################################## Login Page ################################
	
	// Login btn
	$("#login-button").on("click",function(e){
		e.preventDefault();
		var redirect = "dashboard.php";
		window.location.assign(redirect);
	});
	// ---

	//login focus
	var login_input = $("input[name='user-login-name']");
	if(login_input.length > 0)
		login_input.focus();
	// end ---

	//##############################################################################

	//################################## Dashboard Page ############################

	//MODAL: STATUS DE BATALHA
	$(".info-status a").on("click",function(){
		var self = $(this);
		var modal = $("#statusBattle");
		var status = self.parents("span").parents("li").attr("class");
		//status info
		$(modal).find("h1").text(status); //title
		$(modal).find("p").text(status); //descr
	});
	// end ---

	//##############################################################################


	//#################################### Search Page #############################

	//Search 
	$("#search-input button").on("click",function(){
		var url = 'search-page.php';
		window.location.assign(url);
	});
	// end ---

	//##############################################################################

	//##################################### New post Page ##########################
	
	// Post Limit
	var counter = $("#chars-count span");
	if(counter.length > 0){
		var text = $("textarea[name='post-input']");
		text.focus();
		text.on("input",function(){
			var chars = Number(text.val().length);
			var chars_calc = Number(config.postLimit) - chars;
			if(chars > Number(config.postLimit)){
				var text_limit = text.val().substring(0,Number(config.postLimit));
				text.val(text_limit);
				counter.text(0);
				return false;
			}
			counter.text(chars_calc);
		});
	}
	//end

	var preview = {
		"stage": $("#preview-post"),
		"btn": $("#post-test"),
		"text": $("textarea[name='post-input']")
	};
	
	preview.btn.on("click",function(e){
		e.preventDefault();
	});

	var btn = preview.btn;
	function preview_post(){
		if(preview.text.val() == "")
			return false;
		
		// check black list
		var text_post_lower = preview.text.val().toLowerCase();
		var black_list_tags = ['style','applet', 'body', 'bgsound', 'base', 'basefont', 'embed', 'frame', 'frameset', 'head', 'html', 'id', 'ilayer', 'layer', 'link', 'meta', 'name', 'object', 'script', 'title', 'xml', 'action', 'background', 'codebase', 'dynsrc', 'lowsrc','href'];
		var counter = 0;
		var text_post;
		while(counter < black_list_tags.length){
			text_post = text_post_lower.replace("<"+black_list_tags[counter]+">","");
			if(text_post != preview.text.val()){
				$("#modalTrigger").trigger("click");
				return false;
			}
			counter++;
		}
		preview.stage.empty(); // Cleaner ---
		btn.unbind("click",preview_post);
		preview.stage.append(text_post);
		preview.text.animate({opacity:0},250,function(){
			$(this).css({"display":"none"});
			preview.stage.css({"display":"block","opacity":"1"});
			btn.bind("click",edit_post);
		});
	}
	function edit_post(){
		btn.unbind("click",edit_post);
		preview.stage.animate({opacity:0},250,function(){
			$(this).css({"display":"none"});
			preview.text.css({"opacity":"1","display":"block"});
			btn.bind("click",preview_post);
		});
	}
	
	btn.on("click",preview_post);

	// #############################################################################

})(jQuery);