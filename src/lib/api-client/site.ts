import axios from 'axios';

import Fetcher from './util/fetcher';

// const api = `${process.env.PROTOCOL}://${process.env.WWW_HOST}:${process.env.PORT}/api`;
const api = 'http://durrant.test:8080/api';

console.log(api);

// export default axios.get(`${api}/site`)
// .then(response => response.data)
// .catch(error => {
//     throw error;
// });

const site = axios.get(`${api}/site`).then(response => response.data);

export default new Fetcher(site);
