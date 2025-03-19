// script.js
fetch('https://api.openweathermap.org/data/2.5/weather?q=Aire-sur-la-Lys&units=metric')
  .then(response => response.json())
  .then(data => {
    const weatherContainer = document.getElementById('weather-container');
    const weatherCard = document.createElement('div');
    weatherCard.innerHTML = `
      <h2>${data.name}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
    weatherContainer.appendChild(weatherCard);
  })
  .catch(error => console.error('Error:', error));
