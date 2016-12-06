
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
	console.log('running');
    $('body').scrollspy({
		target: "#myNavbar",
		offset: 70
	});
	$('#myNavbar').on('activate.bs.scrollspy', function () {
		console.log('navbar moving');
	})

});