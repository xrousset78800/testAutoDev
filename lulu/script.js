// script.js
fetch('https://api.openweathermap.org/data/2.5/weather?q=Aire-sur-la-Lys&appid=YOUR_API_KEY')
  .then(response => response.json())
  .then(data => {
    const weatherContainer = document.getElementById('weather-container');
    weatherContainer.innerHTML = `
      <h2>${data.weather[0].main}</h2>
      <p>Température : ${Math.round(data.main.temp - 273.15)}°C</p>
      <p>Vitesse du vent : ${data.wind.speed} km/h</p>
    `;
  })
  .catch(error => console.error('Erreur:', error));
