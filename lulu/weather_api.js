const API_KEY = 'YOUR_API_KEY';
const OPENWEATHERMAP_URL = `https://api.openweathermap.org/data/2.5/weather?q=Aire-sur-la-Lys&appid=${API_KEY}`;

export async function getCurrentWeather() {
  try {
    const response = await fetch(OPENWEATHERMAP_URL);
    if (!response.ok) throw new Error('Failed to load weather data');
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
