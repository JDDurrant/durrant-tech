import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as logger from 'morgan';

import router from './router';

const api = express();

process.env.NODE_ENV == 'development' && api.use(logger(':method :url :status :res[content-length] - :response-time ms'));

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));

// api.use(express.static(__dirname + '/../../public'));
api.use(router);

export default api;
