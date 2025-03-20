// Load weather API data
fetch('weatherAPI.json')
  .then(response => response.json())
  .then(data => {
    // Update current weather information
    const currentWeather = document.getElementById('current-weather');
    currentWeather.textContent = `${data.currentWeather.temperature}°C, ${data.currentWeather.humidity}%`;

    // Update forecast data
    const forecastList = document.getElementById('forecast-list');
    data.forecast.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.date}: ${item.condition}`;
      forecastList.appendChild(listItem);
    });
  });

// Function to update weather information every minute
function updateWeather() {
  fetch('weatherAPI.json')
    .then(response => response.json())
    .then(newData => {
      // Update current weather information
      const currentWeather = document.getElementById('current-weather');
      currentWeather.textContent = `${newData.currentWeather.temperature}°C, ${newData.currentWeather.humidity}%`;

      // Update forecast data
      const forecastList = document.getElementById('forecast-list');
      while (forecastList.firstChild) {
        forecastList.removeChild(forecastList.firstChild);
      }
      newData.forecast.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.date}: ${item.condition}`;
        forecastList.appendChild(listItem);
      });
    });
}

// Call the updateWeather function every minute
setInterval(updateWeather, 60000);
