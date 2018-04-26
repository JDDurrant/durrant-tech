import * as Joi from 'joi';
import { ICollection } from 'monk';
import * as url from 'url';

import Model from './model';
import { Request, Response, NextFunction } from 'express';

export default class UserModel extends Model {

	static collection = Model.db.get('users');
	
	static schema = Joi.object().keys({
		name: Joi.string().alphanum().max(20).required(),
		email: Joi.string().email().required(),
		slug: Joi.string().max(20),
		links: Joi.object().keys({
			website: Joi.string().uri({
				scheme: ['http', 'https']
			}),
			github: Joi.string(),
			youtube: Joi.string(),
			twitter: Joi.string(),
			facebook: Joi.string()
		}),
		authentication: Joi.object().keys({
			password: Joi.string().min(8)
		})
	});

	static findByEmail(req: Request, res: Response, next?: NextFunction) {
		res.locals.query = this.collection.findOne({
			email: req.params.email // This might be updated, depending on where the email address gets stored
		});
	}

	static findByUsername(req: Request, res: Response, next?: NextFunction) {
		res.locals.query = this.collection.findOne({
			slug: req.params.username // This might be updated, depending on where the username gets stored
		});
	}

	/**
	 * Methods to implement:
	 * - generateUsername
	 */
}
