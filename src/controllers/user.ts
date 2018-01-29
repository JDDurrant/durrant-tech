import * as express from 'express';

import User from '../models/user';

export default class UserController {
	// GET
	static list(req, res, next) {
		//users
		const query = User.find();

		query.then(users => {
			const page = res.locals.page;
			page.title = 'Users';
			page.body = 'User list';
			page.users = users;
			page.theme = 'default';
			page.template = 'user/list/user-list';

			next();
		});

		query.catch(err => {
			console.log("Couldn't find user:", err);
			res.send("Database error");
		});
	}

	static view(req, res, next) {
		//users/:user
	}

	static form(req, res, next) {
		//users/add
		const page = res.locals.page;
		page.title = 'Add User';
		page.body = 'Add a new user';
		page.theme = 'default';
		page.template = 'form/user/form-user';

		next();
	}
	// POST
	static save(req, res, next) {
		//users/add
		const insert = User.insert(req.body);

		insert.then((data) => {
			res.locals.valid = true;
			next();
		});

		insert.catch(err => {
			res.locals.valid = false;
			next();
		});
	}
	
	static then(req, res, next) {
		// Executed upon valid input
		if(res.locals.valid) res.redirect('/users');
		next();
	}

	static catch(req, res, next) {
		// Validation errors handled here
		if(!res.locals.valid) res.send("Invalid input");
		next();
	}
}
