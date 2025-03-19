// weatherAPI.js
export const API_KEY = 'YOUR_API_KEY_HERE';

const apiResponse = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

const getWeatherData = async () => {
  const url = `https://api.weather.com/${API_KEY}`;
  const data = await apiResponse(url);
  // process the weather data here
};

export { getWeatherData };
