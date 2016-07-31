// OpenWeather
var apiKey = "bbff6fd0939ebcb8c45356c0408e1e00";
// http://api.openweathermap.org/data/2.5/weather?lat=26.5482183&lon=-80.1396527&APPID=bbff6fd0939ebcb8c45356c0408e1e00

$(document).ready(function() {
	var currentWeather = $('#currentWeather');

	function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);
	    } else {
	        $("#demo").html("Geolocation is not supported by this browser.");
	    }
	}

	function showPosition(position) {
	    $("#demo").html("Latitude: " + position.coords.latitude +
	    "<br>Longitude: " + position.coords.longitude);
	}

	function getWeather(position) {
		// send location info to provider
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;

		var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=" + apiKey;

		// recieve JSON data
		$.getJSON(url, function(data) {
			console.log(data);

			var items = data.items.map(function (item) {
        	return item.key + ': ' + item.value;

        	currentWeather.empty();

        	if (items.length) {
		    	var content = '<li>' + items.join('</li><li>') + '</li>';
        		var list = $('<ul />').html(content);
      			showData.append(list);
        	};
      });
		});
	}

	function showWeather() {
		// get/show city name based on geolocation data
		// show weather
		//	show temp
		//  show rain chance
		//  show humidity?
		//  show forecast?
		// get background image based on location and rain/cloudy/time
	}

	getLocation();
	getWeather();

});

