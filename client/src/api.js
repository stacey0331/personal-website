import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8001/api',
});

export const createResponse = (name, email, message) => {
    const promise = api.post('/newResponse', {
        name: name,
        email: email, 
        message: message
    })
        .then(() => {
            console.log('Client: response created');
        })
        .catch(() => {
            console.log('Client: cannot create response');
        });
    return promise;
}

const apis = {
    createResponse,
}

export default apis;