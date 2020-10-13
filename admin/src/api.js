import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
});

export const getResponses = () => api.get('/responses');

const apis = {
    getResponses,
}

export default apis;