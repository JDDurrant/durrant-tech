import * as Joi from 'joi';
import { ICollection } from 'monk';

import Model from './model';

export default class User {
	
	static schema: Joi.schema = Joi.object().keys({
		fname: Joi.string().alphanum().max(20).required(),
		sname: Joi.string().alphanum().max(20).required(),
		email: Joi.string().email().required()
	});

	static collection: ICollection = Model.db.get('users');

	static find(object?: object) {
		return Model.find(User, object || {});
	}

	static findByEmail(email: string) {
		return User.find({ email: email });
	}
	
	static insert(object: object) {

		return Model.insert(User, object)
	}
}
