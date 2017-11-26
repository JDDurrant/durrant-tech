import Joi from 'joi';

import User from '../models/user';

export default class UserController {

	static add(req, res, next) {

		const query = User.insert(req.body);
		query.then(() => res.redirect('/'));
	}

	static validate(req, res, next) {

		const check = Joi.validate(req.body, User.schema);
		
		check.then(data => {
			next();
		});

		check.catch(err => {
			res.send("Invalid input");
			// console.log(err);
			// console.log(Joi.string().email().required());
		});
	}
}
