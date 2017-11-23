import bodyParser from 'body-parser';
import ejs from 'ejs';
import express from 'express';
//import './models/mongodb';
import { users } from './models/user';
import home from './controllers/home';

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', home);

app.post('/add-user', (req, res, next) => {
	const query = users.insert(req.body);

	query.then(() => res.redirect('/'));

	//res.redirect('/');
});

app.listen(3000, () => {
	console.log('Listening on 3000...');
});
