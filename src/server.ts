import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as logger from 'morgan';

import router from './router';

const api = express();

// Middleware
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));

if(process.env.ENVIRONMENT == 'development')
	api.use(logger(':method :url :status :res[content-length] - :response-time ms'));

api.use(express.static('./public'));
api.use(router);

// Server
const host: string = process.env.API_URL || '127.0.0.1';
const port: number = parseInt(process.env.API_PORT) || 3000;

api.listen(port, host, () => {
	console.log('Listening on %s:%d', host, port);
});

export default api;
