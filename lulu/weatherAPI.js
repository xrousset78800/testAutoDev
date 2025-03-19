// weatherAPI.js
const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';
const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=Aire-sur-la-Lys&units=metric&appid=${API_KEY}`;

function fetchWeatherData() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', API_URL, true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject(new Error(`Error fetching weather data: ${xhr.statusText}`));
      }
    };
    xhr.send();
  });
}

function parseWeatherData(data) {
  const weatherData = JSON.parse(data);
  return {
    temp_c: weatherData.main.temp,
    condition_icon: weatherData.weather[0].icon,
    condition_text: weatherData.weather[0].description
  };
}

export { fetchWeatherData, parseWeatherData };
