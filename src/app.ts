import * as bodyParser from 'body-parser';
import * as express from 'express';

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

router.use('/res', express.static('./src/public'));

app.use(router);

/*app.post('/add-user', (req, res, next) => {
	const query = users.insert(req.body);

	query.then(() => res.redirect('/'));

	//res.redirect('/');
});*/

export default app;