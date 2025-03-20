const weatherData = {
  "temperature": [
    {"dateAndTime": "2023-03-15T14:30:00", "value": 12},
    {"dateAndTime": "2023-03-16T08:45:00", "value": 8}
  ],
  "condition": ["Sunny", "Cloudy"]
};

function updateWeather() {
  const weatherTitle = document.getElementById("weather-title");
  const weatherDataDiv = document.getElementById("weather-data");

  let currentTemperatureValue;
  for (const temperature of weatherData.temperature) {
    if (temperature.dateAndTime === new Date().toISOString()) {
      currentTemperatureValue = temperature.value;
      break;
    }
  }

  weatherTitle.textContent = `Weather in Aire-sur-la-Lys: ${currentTemperatureValue}°C`;
}

setInterval(updateWeather, 1000);
