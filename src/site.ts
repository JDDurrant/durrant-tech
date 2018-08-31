import * as dotenv from 'dotenv';
import * as express from 'express';

import api from './api/server';
import www from './apps/www/server';

dotenv.config();

const API_HOST = process.env.API_HOST;
const WWW_HOST = process.env.WWW_HOST;
const PORT = Number.parseInt(process.env.PORT);

const app = express();

app.use('/api', api);
app.use(www);

app.listen(PORT, WWW_HOST, () => console.log(`WWW: http[s]://${WWW_HOST}:${PORT}`));
api.listen(PORT, API_HOST, () => console.log(`API: http[s]://${API_HOST}:${PORT}`));
