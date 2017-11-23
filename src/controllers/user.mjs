import { users } from '../models/user';

export default class User {
	static add(req, res, next) {
		const query = users.insert(req.body);
		query.then(() => res.redirect('/'));
	}
}
