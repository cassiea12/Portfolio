

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