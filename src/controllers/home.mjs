import { users } from '../models/user';

export default function home(req, res, next) {
	const query = users.get({});

	query.then(data => {
		res.render('index', { data: data});
	});
}
