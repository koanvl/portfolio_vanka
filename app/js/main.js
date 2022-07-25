$(document).ready(function(){

	var amountScrolled = 50;

	$(window).scroll(function() {
		if ( $(window).scrollTop() > amountScrolled ) {
			$("header").addClass("white-shadow");
		} else {
			$("header").removeClass("white-shadow");
		}
	}); 


	
	var $element = $('#skill-box');
    let counter = 0;
$(window).scroll(function() {
  var scroll = $(window).scrollTop() + $(window).height();  
  var offset = $element.offset().top + $element.height()/2; 
  if (scroll > offset && counter == 0) {
    $( ".progress-bar .title" ).each(function() {
			let value = $(this).data("value");
			$(this).css("width", `${value}%`);
		});
    counter = 1;
  }
});

})