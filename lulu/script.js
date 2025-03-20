// Get elements
const currentWeather = document.getElementById('current-weather');
const forecastList = document.getElementById('forecast-list');

// Function to update weather information every minute
function updateWeather() {
    // Update current weather information
    const temp = Math.floor(Math.random() * 100);
    const condition = ['Sunny', 'Cloudy', 'Rainy'][Math.floor(Math.random() * 3)];
    currentWeather.innerHTML = `<div class="current-temp">${temp}°C</div><div class="weather-condition">${condition}</div>`;

    // Update forecast data
    while (forecastList.firstChild) {
        forecastList.removeChild(forecastList.firstChild);
    }
    for (let i = 0; i < 5; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `Date: ${new Date().toLocaleDateString()} | Condition: ${['Sunny', 'Cloudy', 'Rainy'][Math.floor(Math.random() * 3)]}`;
        forecastList.appendChild(listItem);
    }
}

// Call the updateWeather function every minute
setInterval(updateWeather, 60000);

// Initialize weather data
updateWeather();
