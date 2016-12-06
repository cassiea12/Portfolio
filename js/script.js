
// NAV BACKGROUND SCROLL APPEAR

$(window).on('scroll', function() {

	var topDistance= $(document).scrollTop();
	var $navbar = $('.navbar');

	if(topDistance>100) {


		$navbar.css({
			'background-color': 'black'
		});

		console.log(topDistance);
	}
	else {
		$navbar.css({
			'background-color': 'transparent'
		});
	}

});

// SCROLLSPY

$(document).ready(function(){
    $("body").scrollspy({
		target: "#myNavbar",
		offset: 70
	}) 
});