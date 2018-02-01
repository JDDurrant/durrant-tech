import * as express from 'express';

import Controller from './controller';
import User from '../models/user.model';

export default class UserController extends Controller {

	static model = User;

	// GET
	static list(req, res, next) {
		//GET	/users
		const query = User.find();

		query.then(users => {
			const page = res.locals.page;
			page.title = 'Users';
			page.body = 'User list';
			page.users = users;
			page.theme = 'default';
			page.content = 'user/list/user-list';
			page.sidebar = 'empty/empty';

			next();
		});

		query.catch(err => {
			console.log("Couldn't find user:", err);
			res.send("Database error");
		});
	}

	static view(req, res, next) {
		//GET	/users/:user
	}

	static form(req, res, next) {
		//GET	/users/add
		const page = res.locals.page;
		page.title = 'Add User';
		page.body = 'Add a new user';
		page.theme = 'default';
		page.template = 'form/user/form-user';

		next();
	}
	// POST

	static save(req, res, next) {
		//POST /users/add
		// console.log("Posted:", req.body); // Works

		try {
			User.insert(req.body);
			res.redirect('/users');
			next();
		}
		catch(e) {
			// console.log("Validation error:", e);
			res.send(e);
		}
	}

	// static save(req, res, next) {
	// 	//POST	/users/add
	// 	const insert = User.insert(req.body);

	// 	insert.then((data) => {
	// 		res.locals.valid = true;
	// 		next();
	// 	});

	// 	insert.catch(err => {
	// 		res.locals.valid = false;
	// 		next();
	// 	});
	// }
	
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