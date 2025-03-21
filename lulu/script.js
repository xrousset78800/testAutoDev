// Récupération des données météo
fetch('https://api.openweathermap.org/data/2.5/weather?q=Aire-sur-la-Lys&appid=YOUR_API_KEY')
  .then(response => response.json())
  .then(data => {
    const temperature = data.main.temp;
    const date = new Date();
    const description = data.weather[0].description;

    // Mise à jour du contenu de la page
    document.querySelector('.temperature').textContent = `${Math.round(temperature)}°C`;
    document.querySelector('.date').textContent = date.toLocaleDateString('fr-FR');
    document.querySelector('.description').textContent = description;
  })
  .catch(error => console.error(error));

// Animation des éléments du design
const weatherContainer = document.getElementById('weather-container');

setInterval(() => {
  // Génère un effet de vent animé (par exemple, en déplaçant les éléments)
}, 1000);

// Ajout d'un événement pour afficher le temps réel
document.addEventListener('DOMContentLoaded', () => {
  setInterval(() => {
    const date = new Date();
    document.querySelector('.date').textContent = date.toLocaleTimeString('fr-FR');
  }, 1000);
});
