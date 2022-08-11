$('.about_items > div').on('click', function () {
	$(this).children('.about-icon').toggleClass('about-rotate-icon');
	$(this).parent('.about_items').toggleClass('change-color');
	$(this).next('.about-text').slideToggle(300);

})