import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as less from 'less-middleware';

import router from './router';

// Initlalisation
const app: express.Application = express();

app.locals.site = require('../site.json');

// App Settings
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(less('./src/views', {
	cacheFile: './bin/less-cache.json',
	debug: true,
	dest: './public'
}));

app.use(express.static('./public'));

app.use(router);

/*app.post('/add-user', (req, res, next) => {
	const query = users.insert(req.body);

	query.then(() => res.redirect('/'));

	//res.redirect('/');
});*/

export default app;