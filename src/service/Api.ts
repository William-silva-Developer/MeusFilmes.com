import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com',
    headers : {
        "Content-Type": "application/json",
        
    }
})

export {api}