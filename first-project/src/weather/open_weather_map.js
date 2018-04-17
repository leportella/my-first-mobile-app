const WEATHER_API_KEY = '';
const API_STEM = 'http://api.openweathermap.org/data/2.5/weather?';


function zipUrl(zip) {
  return `${API_STEM}q=${zip}&units=metric&APPID=${WEATHER_API_KEY}`;
}

function fetchForecast(zip) {
  return fetch(zipUrl(zip))
    .then(response => response.json())
    .then(responseJSON => {
      return {
        main: responseJSON.weather[0].main,
        description: responseJSON.weather[0].description,
        temp: responseJSON.main.temp
      };
    })
    .catch(error => {
      console.log(error);
    });
}

export default { fetchForecast: fetchForecast };
