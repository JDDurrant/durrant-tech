import * as Joi from 'joi';
import { ICollection } from 'monk';

import Model from './model';

export default class User extends Model {
	
	schema: Joi.schema = Joi.object().keys({
		fname: Joi.string().alphanum().max(20).required(),
		sname: Joi.string().alphanum().max(20).required(),
		email: Joi.string().email().required()
	});

	// To replace the schema above
	//
	// static schema: Joi.schema = Joi.object().keys({
	// 	name: Joi.string().alphanum().max(50),
	// 	website: Joi.string().max(50),
	// 	contact: Joi.object().keys({
	// 		email: Joi.string().max(100).required()
	// 	})
	// });

	static collection: ICollection = Model.db.get('users');
	collection: ICollection = User.collection;

	static findByEmail(email: string) {
		return User.find({ email: email });
	}
	
	// To be replaced with save() method in base Model class
	//
	// static insert(data) {

	// 	return Model.insert(User, data)
	// }

	// To be replaced with find(data?) method in base Model class
	//
	// static find(data?) {
	// 	return Model.find(User.collection, data || {});
	// }
}
