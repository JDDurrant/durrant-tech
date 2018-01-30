import * as Joi from 'joi';
import { ICollection } from 'monk';

import Model from './model';

export default class User extends Model {
	
	static schema: Joi.schema = Joi.object().keys({
		fname: Joi.string().alphanum().max(20).required(),
		sname: Joi.string().alphanum().max(20).required(),
		email: Joi.string().email().required()
	});

	static collection: ICollection = Model.db.get('users');

	// static find(data?) {
	// 	return Model.find(User.collection, data || {});
	// }

	static findByEmail(email: string) {
		return User.find({ email: email });
	}
	
	static insert(data) {

		return Model.insert(User, data)
	}
}
