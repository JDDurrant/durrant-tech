import { Request, Response, NextFunction } from 'express';
// import * as Joi from 'joi';
// import { ICollection } from 'monk';
// import * as url from 'url';

import UserSchema from '../../../lib/schemas/user.schema';
import Model from './model';

export default class UserModel extends Model {

	static collection = Model.db.get('users');
	static schema = UserSchema;

	// GET
	static findByEmail(req: Request, res: Response, next?: NextFunction) {
		res.locals.query = this.collection.findOne({
			email: req.params.email // This might be updated, depending on where the email address gets stored
		});

		next();
	}

	static findByUsername(req: Request, res: Response, next?: NextFunction) {
		res.locals.query = this.collection.findOne({
			slug: req.params.username // This might be updated, depending on where the username gets stored
		});

		next();
	}

	/**
	 * Methods to implement:
	 * - generateUsername
	 * - generatePassword
	 */
}
