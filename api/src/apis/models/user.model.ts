import * as Joi from 'joi';
import { ICollection } from 'monk';
import * as url from 'url';

import Model from './model';

export default class UserModel extends Model {

	static collection = Model.db.get('users');
	
	static schema = Joi.object().keys({
		name: Joi.string().alphanum().max(20).required(),
		email: Joi.string().email().required(),
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

	/**
	 * Methods to implement:
	 * - findByEmail
	 * - findByUsername
	 */
}
