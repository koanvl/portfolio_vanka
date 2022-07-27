$(document).ready(function(){

	/*header shadow*/
	let amountScrolled = 50;
	$(window).scroll(function() {
		if ( $(window).scrollTop() > amountScrolled ) {
			$("header").addClass("white-shadow");
		} else {
			$("header").removeClass("white-shadow");
		}
	}); 
	/*header shadow*/


	/*skill-box progress-bar*/
	let $element = $('#skill-box');
  let counter = 0;
$(window).scroll(function() {
  let scroll = $(window).scrollTop() + $(window).height();  
  let offset = $element.offset().top + $element.height()/2; 
  if (scroll > offset && counter == 0) {
    $( ".progress-bar .title" ).each(function() {
			let value = $(this).data("value");
			$(this).css("width", `${value}%`);
		});
    counter = 1;	
  }
});
/*skill-box progress-bar*/

/*scroll navigation*/
$('.scroll-nav').on('click', function(e) {
	e.preventDefault();
	let section = $(this).attr('href').substr($(this).attr('href').indexOf('#'));
	let $section = $(section);
	let windowWidth = window.innerWidth;
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
/*skill-tag-box add data-wow-delay attr*/
function addAttrWowDelay(){
let tagElement = document.getElementsByClassName("skill-tag-item");
let counterDelay = 0.5;
for(let i = 0; i<tagElement.length; i++){
	counterDelay += 0.25;
	tagElement[i].setAttribute("data-wow-delay", `${counterDelay}s`);
}
}
addAttrWowDelay();
