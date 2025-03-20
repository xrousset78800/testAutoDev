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
      listItem.textContent = `Date: ${item.date} | Condition: ${item.condition}`;
      forecastList.appendChild(listItem);
    });
  });

// Function to update weather information every minute
function updateWeather() {
  // Update current weather information
  const temp = Math.floor(Math.random() * 100);
  const condition = ['Sunny', 'Cloudy', 'Rainy'][Math.floor(Math.random() * 3)];
  document.getElementById('current-weather').textContent = `${temp}°C, ${condition}`;

  // Update forecast data
  fetch('weatherAPI.json')
    .then(response => response.json())
    .then(data => {
      const forecastList = document.getElementById('forecast-list');
      while (forecastList.firstChild) {
        forecastList.removeChild(forecastList.firstChild);
      }
      data.forecast.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Date: ${item.date} | Condition: ${item.condition}`;
        forecastList.appendChild(listItem);
      });
    });
}

// Call the updateWeather function every minute
setInterval(updateWeather, 60000);

// Initialize weather data
updateWeather();
