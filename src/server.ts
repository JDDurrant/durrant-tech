import * as logger from 'morgan';

import app from './app';

const host: string = process.env.HOST || '127.0.0.1';
const port: number = parseInt(process.env.PORT) || 3000;

if(process.env.ENV == "development") {
    app.use(logger(':method :url :status :res[content-length] - :response-time ms'));
}

app.listen(port, host, () => {
	console.log('Listening on %s:%d', host, port);
});