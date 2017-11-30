import User from '../models/user';

export default function HomeController(req, res, next) {
	const query = User.find();

	query.then(data => {

		res.locals.page = {
			title: 'Jack Durrant',
			body: 'Hello, World!',
			theme: 'default'
		};

		return res.render('index', {
			page: res.locals.page,
			site: req.app.locals.site,
			template: 'home'
		});
	});
}
