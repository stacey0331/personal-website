import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8001/api',
});

export const createResponse = payload => {
    const promise = api.post('/newResponse', payload)
        .then(() => {
            console.log('Client: response created');
        })
        .catch(() => {
            console.log('Client: cannot create response');
        });
    return promise;
}

export const getResponses = () => api.get('/responses');

const apis = {
    createResponse,
    getResponses,
}

export default apis;