// import Template from '../middleware/templates/user';
import Model from '../models/user';

export default {
	// GET
	list(req, res, next) {
		//users
		const query = Model.find();

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
	},

	view(req, res, next) {
		//user/:id
	},

	form(req, res, next) {
		const page = res.locals.page;
		page.title = 'Add User';
		page.body = 'Add a new user';
		page.theme = 'default';
		page.template = 'form/user/form-user';

		next();
	},
	// POST
	save(req, res, next) {
		//add-user
		const insert = Model.insert(req.body);

		insert.then((data) => {
			res.locals.valid = true;
			next();
		});

		insert.catch(err => {
			res.locals.valid = false;
			next();
		});
	},
	
	then(req, res, next) {
		// Executed upon valid input
		if(res.locals.valid) res.redirect('/users');
		next();
	},

	catch(req, res, next) {
		// Validation errors handled here
		if(!res.locals.valid) res.send("Invalid input");
		next();
	}
}
