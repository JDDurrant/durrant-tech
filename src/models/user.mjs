import Joi from 'joi';

import Model, { db } from './model';

const collection = db.get('users');

const schema = Joi.object().keys
({
	fname: Joi.string().alphanum().max(20).required(),
	sname: Joi.string().alphanum().max(20).required(),
	email: Joi.string().email().required()
});

export default class UserModel extends Model {

	static find(object, fn) {
		return collection.find(object, fn);
	}

	static insert(object) {
		
		const validate = Joi.validate(object, schema);

		validate.then(data => collection.insert(object));

		return validate;
	}
}
