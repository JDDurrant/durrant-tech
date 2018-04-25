import axios from 'axios';
import * as express from 'express';
import * as path from 'path';
import * as react from 'react-engine';

const www = express();

www.engine('js', react.server.create());
www.set('views', path.join(__dirname, 'components'));

www.use('/res', express.static(path.join(__dirname, '../../../public')));

const api = `http://${process.env.API_URL}:${process.env.API_PORT}`;

www.all('*', (req, res, next) => {
    
    console.log('Request URL:', api + req.path);

    const request = axios.request({
        url: api + req.path,
        data: req.body,
        headers: req.headers
    });

    request.then(response => res.render('app.js', response.data));

    request.catch(error => res.render('app.js', { title: 'Server error' }));
});

const host: string = process.env.WWW_URL || '127.0.0.1';
const port: number = parseInt(process.env.WWW_PORT) || 8081;

www.listen(port, host, () => {
    console.log('WWW - Listening on %s:%d', host, port);
});

export default www;
