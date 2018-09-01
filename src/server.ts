import * as dotenv from 'dotenv';
import * as express from 'express';
import * as logger from 'morgan';

import api from './api/api';
import app from './apps/www/app';

dotenv.config();

// const NODE_ENV = process.env.NODE_ENV;
const PROTOCOL = process.env.PROTOCOL;
const API_HOST = process.env.API_HOST;
const WWW_HOST = process.env.WWW_HOST;
const PORT = Number.parseInt(process.env.PORT);

const server = express();

server.use('/res', express.static(`${__dirname}/../public`));
server.use('/api', api);
server.use(app);

server.listen(PORT, WWW_HOST, () => console.log(`WWW: ${PROTOCOL}://${WWW_HOST}:${PORT}`));
api.listen(PORT, API_HOST, () => console.log(`API: ${PROTOCOL}://${API_HOST}:${PORT}`));
