// Get the weather data from OpenWeatherMap API
fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY')
  .then(response => response.json())
  .then(data => {
    // Update the weather header with the current conditions
    document.getElementById('weather-header').textContent = `Current weather conditions in London: ${data.weather[0].description}`;

    // Create elements for temperature and humidity
    const tempElement = document.createElement('p');
    tempElement.textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('weather-container').appendChild(tempElement);

    const humidElement = document.createElement('p');
    humidElement.textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('weather-container').appendChild(humidElement);
  })
  .catch(error => console.error('Error:', error));
