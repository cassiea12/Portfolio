// Add smooth scrolling on all links inside the navbar
var $navItem = $('#myNavbar a');

//When a user clicks a nav item...
$navItem.on('click', function(event) {

	// if there is a hash tag
	if (this.hash !== "") {

		// stop the normal link from firing
		event.preventDefault();

		// store the hash tag in a local variable
		var hash = this.hash;

		// scroll the document from the current location to the location of the hastag.
		$('html, body').animate({

			scrollTop: $(hash).offset().top

		}, 800, function(){

			window.location.hash = hash;  // Update the hash tag in the location bar

		});
	}
});