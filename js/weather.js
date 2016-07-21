$(document).ready(function() {
	function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);
	        console.log('got location');
	    } else {
	        $("p").innerHTML = "Geolocation is not supported by this browser.";
	    }
	}

	function showPosition(position) {
	    $("p").innerHTML = "Latitude: " + position.coords.latitude +
	    "<br>Longitude: " + position.coords.longitude;
	    console.log('showing position');
	}

	$("body").ready(getLocation());
});

