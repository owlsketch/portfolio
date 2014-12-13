$(document).ready(function(){
//get current url, if <a> has same url,"highlight"
	var url = window.location.href; 
	$("nav ul li a").each(function() {
		if(url == (this.href)) { 
			$(this).closest("a").css("font-weight","bold");
		 }
	});
});
