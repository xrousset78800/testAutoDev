const axios = require('axios');

async function getCurrentWeather() {
  try {
    const response = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          q: 'Aire-sur-la-Lys',
          units: 'metric',
          appid: 'YOUR_API_KEY'
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getCurrentWeather };
