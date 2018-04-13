const axios = require('axios');
const keys = require('./config/keys');

function degreeToCompass(num) {
  const val = Math.floor((num / 90) + 0.5);
  const arr = ["Nord", "Øst", "Syd", "Vest"]
  return arr[(val % 4)];
}

function getWeather(city) {
  const UNITS = 'metric';
  const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},dk&units=${UNITS}&appid=${keys.openweathermap}`

  return new Promise((resolve, reject) => {
    axios.get(ROOT_URL).then(result => {
      resolve({
        city: result.data.name,
        temp: `${result.data.main.temp}°C`,
        humidity: result.data.main.humidity,
        wind: `${result.data.wind.speed} m/s ${degreeToCompass(result.data.wind.deg)}`
      });
    });
  })
}

module.exports = { getWeather }

