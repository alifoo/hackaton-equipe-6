import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:9900/api',
});

export default api;