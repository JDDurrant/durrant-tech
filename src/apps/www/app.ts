// import axios from 'axios';
import * as express from 'express';
import * as logger from 'morgan';
import * as path from 'path';
import * as react from 'react-engine';

import site from '../../lib/api-client/site';

const app = express();

app.engine('js', react.server.create());
app.set('views', path.join(__dirname, 'components'));

process.env.NODE_ENV == 'development' && app.use(logger(':method :url :status :res[content-length] - :response-time ms'));

// app.use('/res', express.static(path.join(__dirname, '../../../public')));

// const api = `${process.env.PROTOCOL}://${process.env.API_HOST}:${process.env.PORT}`;

app.get('/', async (req, res, next) => res.render('app.js', {
    page: {
        title: 'Home'
    },
    site: await site
}));

// app.all('*', (req, res, next) => {
    
//     axios.request({
//         url: api + req.path,
//         data: req.body,
//         headers: req.headers
//     })
//     .then(response => res.render('app.js', response.data))
//     .catch(error => res.status(404).render('app.js', { title: 'Server error' }));
// });

export default app;
