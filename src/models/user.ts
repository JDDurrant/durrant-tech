import * as Joi from 'joi';
import { Schema } from 'mongoose';
import { ICollection } from 'monk';

import Model from './model';

class User {
	name: string;
	email: string;
}

export default class UserModel {

	static schema: Schema = new Schema({
		name: String,
		email: {
			type: String,
			required: [true, 'Missing field: email']
		}
	});
	
	// static schema: Joi.schema = Joi.object().keys({
	// 	fname: Joi.string().alphanum().max(20).required(),
	// 	sname: Joi.string().alphanum().max(20).required(),
	// 	email: Joi.string().email().required()
	// });

	static collection: ICollection = Model.db.get('users');

	static find(object?: object) {
		return Model.find(UserModel, object || {});
	}

	static findByEmail(email: string) {
		return UserModel.find({ email: email });
	}
	
	static insert(object: object) {

		return Model.insert(UserModel, object)
	}
}
