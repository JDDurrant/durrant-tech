import User from '../models/user';

export default class UserController {

	static add(req, res, next) {

		const query = User.insert(req.body);
		query.then(() => res.redirect('/'));
	}
}
