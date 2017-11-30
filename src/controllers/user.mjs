import Joi from 'joi';

import User from '../models/user';

export default class UserController {
	// Currently ordered by execution
	static validate(req, res, next) {
		return User.validate(req, res, next);
	}
	// GET
	static form(req, res, next) {

	}
	// POST
	static save(req, res, next) {

		if(res.locals.valid) {
			const query = User.insert(req.body);
			query.then(() => res.redirect('/'));
		}
		else next();
	}
	//
	static catch(req, res, next) {
		// Validation errors handled here
		res.send("Invalid input");
	}
}
