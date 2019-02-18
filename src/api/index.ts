import axios from 'axios';

const API = axios.create({
  baseURL: process.env.API_URL,
  validateStatus: status => status >= 200 && status <= 503,
});

export default API;
