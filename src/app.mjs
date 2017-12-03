import bodyParser from 'body-parser';
import ejs from 'ejs';
import express from 'express';

//import home from './controllers/home';
//import './models/mongodb';
//import { users } from './models/user';
import router from './router';

import site from '../site.json';

const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

const app = express();

app.locals.site = site;

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/res', express.static('./src/public'));

app.use(router);

/*app.post('/add-user', (req, res, next) => {
	const query = users.insert(req.body);

	query.then(() => res.redirect('/'));

	//res.redirect('/');
});*/

app.listen(port, host, () => {
	console.log('Listening on %s:%d', host, port);
});
