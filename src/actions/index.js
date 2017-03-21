import axios from 'axios';

const API_KEY='1a7d24001ffa40f05c3f80b5b6b7a251';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
  const url = `${ROOT_URL}&q=${city},US`;
  const request = axios.get(url);

  // axios returns a promise

  console.log('Request in ActionCreator ', request);

  return {
    type : FETCH_WEATHER,
    payload:request
  };
}
