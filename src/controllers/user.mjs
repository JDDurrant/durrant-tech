import Joi from 'joi';

import User from '../models/user';

export default class UserController {
	// GET
	static form(req, res, next) {
		//add-user
	}
	// POST
	static save(req, res, next) {
		//add-user
		const insert = User.insert(req.body);

		insert.then(data => res.locals.valid = true);
		insert.catch(err => res.locals.valid = false);
		insert.finally(() => next());
	}
	//
	static catch(req, res, next) {
		// Validation errors handled here
		res.send("Invalid input");
	}
}
