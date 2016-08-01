// OpenWeather
var apiKey = "bbff6fd0939ebcb8c45356c0408e1e00";
// http://api.openweathermap.org/data/2.5/weather?lat=26.5482183&lon=-80.1396527&APPID=bbff6fd0939ebcb8c45356c0408e1e00



$(document).ready(function() {
	function getLocalWeather() {

		if (!navigator.geolocation) {
			currentWeather.innerHTML = "<p>Location Services not available.</p>";
			return;
		}

		function success(position) {
			var lat = position.coords.latitude;
			var lon = position.coords.longitude;

			var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat +
				"&lon=" + lon + "&APPID=" + apiKey;
			console.log(url);

			$.getJSON(url, function(data) {
				$("#currentTemp").html("Temp: " + Math.round(convertKelvinToFahrenheit(data.main.temp)));
				$("#currentConditions").html("Current Conditions: " + data.weather[0].description);
				$("#currentHumidity").html("Humidity: " + data.main.humidity);
		   });
		};

		function error() {
			$("#currentWeather").innerHTML = "<p>Unable to get location</p>";
			// can I only collapse functions greater than one line long?
		};

		function convertKelvinToFahrenheit(kelvin) {
			return ((kelvin * 9 / 5) - 459.67);
		}

		$("#currentWeather").html = "<p>Getting weather information...</p>";

	   navigator.geolocation.getCurrentPosition(success, error);
	}

	getLocalWeather();

});

