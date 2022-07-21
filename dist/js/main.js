
/*slider-intro*/
$(".slider-intro").slick({
	slidesToShow: 1,
	infifte: true,
	arrows: true,
	autoplay: true,
	autoplaySpeed: 4000,
	nextArrow: '<div class="arrow-next"></div>',
	prevArrow: '<div class="arrow-prev"></div>',
});



/*form-feedback validate*/
$(function(){
	$(".form-feedback").validate({
		rules: {
			username: {
				required: true,
				minlength: 2
			},
			usermail: "required",
			userMessage: {
				required: true,
				minlength: 2
			},

		},
		messages: {
			username: {
				username: "Поле 'Имя' обязательно к заполнению",
				minlength: "Введите не менее 2-х символов в поле 'Имя'",
			},
			usermail: {
				usermail: "Введите верные данные",
				email:"Ваш адрес некорректен",
			},
			userMessage: {
				required: "Введите ваше сообщение",
				minlength: "Сообщение не может быть менее 2 символов",
			}

		}

	});
});


/*scroll navigation*/
$('.scroll').on('click', function(e) {
  e.preventDefault();
  var section = $(this).attr('href').substr($(this).attr('href').indexOf('#'));
  var $section = $(section);

  $('html, body').animate({
    scrollTop: $section.offset().top-80
  }, 1000);
 $(".navbar-collapse").removeClass("in");
});


/*button scroll-to-top*/
var amountScrolled = 200;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('.to-top').fadeIn('slow');
	} else {
		$('.to-top').fadeOut('slow');
	}
}); 
$('.to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});  



















