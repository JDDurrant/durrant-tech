import axios from 'axios';

const api = `${process.env.PROTOCOL}://${process.env.API_HOST}:${process.env.PORT}`;

export default axios.get(`${api}/site`)
.then(response => response.data)
.catch(error => error);
