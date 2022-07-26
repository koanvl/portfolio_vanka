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

/*scroll navigation*/
$('.scroll-nav').on('click', function(e) {
	e.preventDefault();
	var section = $(this).attr('href').substr($(this).attr('href').indexOf('#'));
	var $section = $(section);
	var windowWidth = window.innerWidth;
	if (windowWidth > 993) {
		$('html, body').animate({
			scrollTop: $section.offset().top-90
		}, 1000);
		$(".scroll-nav").removeClass("active");	
		$(this).addClass("active");
		
	}
	else {
		$('html, body').animate({
			scrollTop: $section.offset().top-60
		}, 1000);
		$(".navbar-collapse-own").removeClass("show");
		$(".scroll-nav").removeClass("active");	
		$(this).addClass("active");
		
	}  
});
/*scroll navigation*/

})