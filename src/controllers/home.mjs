import User from '../models/user';

export default function HomeController(req, res, next) {
	const query = User.find();

	query.then(data => {
		res.render('index', { data: data});
	});
}
