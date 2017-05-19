"use strict";

searchButton.addEventListener('click', searchWeather);

function searchWeather() {
  
  //initialize display of boxes
   loadingText.style.display = 'block';  //wait for loading
  weatherBox.style.display = "none";
  
  
  var cityName = searchCity.value;
  if (cityName.trim().length == 0) {
    alert('Please enter a city name.');
  }
  else {console.log(cityName);}
  
  var http = new XMLHttpRequest();
  
  var apiKey = "5fb20d5ed4219f649a9dadae3110d892";
  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + '&units=metric&appid=' + apiKey;
  
  var method = "GET";
  
  http.open(method, url);
  
  http.onreadystatechange = function() {
        if (http.readyState == XMLHttpRequest.DONE && http.status === 200) {
          var data = JSON.parse(http.responseText);
           var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
            weatherData.temperature = data.main.temp;
          console.log(weatherData);
            updateWeather(weatherData);
        } else if (http.readyState === XMLHttpRequest.DONE) {
            alert('Something went wrong!');
        }

   }  
  http.send();
}

 
function updateWeather(wd) {
  weatherCity.textContent = wd.temperature;
  weatherDescription.textContent = wd.description;
  weatherTemperature.textContent = wd.temperature;
  
 loadingText.style.display = 'none';
  weatherBox.style.display = "block";

}
