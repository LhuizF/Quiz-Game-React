import axios from 'axios';

const api = process.env.REACT_APP_CONNECT_API;

export default axios.create({
    baseURL: api
});
