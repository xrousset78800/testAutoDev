// script.js
function getWeather() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Use the data to update your UI or perform other actions
    })
    .catch(error => console.error('Error:', error));
}

getWeather();
