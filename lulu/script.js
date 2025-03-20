// Get weather data from API
fetch('https://api.weather.com/data')
  .then(response => response.json())
  .then(data => {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `${data.currentWeather} ${data.temperature}°C`;
    
    // Update the weather information every minute
    setInterval(() => {
      fetch('https://api.weather.com/data')
        .then(response => response.json())
        .then(newData => {
          const newWeatherInfo = document.getElementById('weather-info');
          newWeatherInfo.innerHTML = `${newData.currentWeather} ${newData.temperature}°C`;
        });
    }, 60000);
    
    // Animate the weather icon
    const weatherIcon = document.getElementById('weather-icon');
    setInterval(() => {
      if (Math.random() > 0.5) {
        weatherIcon.src = 'sunny.png';
      } else {
        weatherIcon.src = 'cloudy.png';
      }
    }, 10000);
  });
