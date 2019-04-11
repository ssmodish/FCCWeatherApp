$(document).ready(function () {
    function getLocalWeather() {

        if (!navigator.geolocation) {
            currentWeather.innerHTML = "<p>Location Services not available.</p>";
            return;
        }

        function success(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            var url = "https://api.weather.gov/points/" + lat + "," + lon;
            console.log(url);

            // $.getJSON(url, function(data) {
            //     weatherData = data;
            //     $("#currentLocation").html("<h1>" + data.name + "</h1>");
            //     $("#currentConditions").html("<img alt='" + data.weather.main + "' src='" +
            // 		getConditionIcon(data.weather[0].icon) + "' />" +
            // 		Math.round(convertKelvinToFahrenheit(data.main.temp)) + "°");
            //
            //     $("#currentHumidity").html("<h3>" + data.main.humidity +
            // 		"% humidity</h3>");
            //
            //     $("input[name='scale']").change(function () {
            //         if ($(this).val() === "celsius") {
            //             $("#currentConditions").html("<img alt='" + data.weather.main + "' src='" +
            //                 getConditionIcon(data.weather[0].icon) + "' />" +
            //                 Math.round(convertKelvinToCelsius(data.main.temp)) + "°");
            //         } else if ($(this).val() === "fahrenheit") {
            //             $("#currentConditions").html("<img alt='" + data.weather.main + "' src='" +
            //                 getConditionIcon(data.weather[0].icon) + "' />" +
            //                 Math.round(convertKelvinToFahrenheit(data.main.temp)) + "°");
            //         }
            //     });
            // });
            // $.ajax({
            //     method: 'GET',
            //     url: url,
            //     dataType: 'jsonp',
            //     success: (res) => {
            //         console.log(res);
            //     }
            // })
            fetchJsonp(url)
                .then(res => res.json())
                .then(json => console.log(json))
        }
        function error() {
            $("#currentConditions").html("<p>Unable to get location</p>");
            // can I only collapse functions greater than one line long?
        }
        function convertKelvinToFahrenheit(kelvin) {
            return ((kelvin * 9 / 5) - 459.67);
        }

        function convertKelvinToCelsius(kelvin) {
            return (kelvin - 273.15);
        }

        function getConditionIcon(code) {
            return ("http://openweathermap.org/img/w/" + code + ".png&callback=test");
        }

        $("#currentConditions").html("Getting weather information...");

        navigator.geolocation.getCurrentPosition(success, error);
    }

    getLocalWeather();

});

