import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `/api/weather/${city}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
