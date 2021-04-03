import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bitagapi.loca.lt/api'
});

export default api;
