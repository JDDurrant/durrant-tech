import User from '../models/user';

export default function HomeController(req, res, next) {
	const query = User.find();

	query.then(data => {
		return res.render('index', {
			page: {
				title: 'Jack Durrant',
				body: 'Hello, World!',
				theme: 'default'
			},
			site: req.app.locals.site,
			template: 'home'
		});
	});
}
