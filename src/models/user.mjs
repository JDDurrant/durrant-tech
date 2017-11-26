import Joi from 'joi';

import Model from './model';

export default class UserModel extends Model {

	constructor(user) {
		this.fname = user.fname;
		this.sname = user.sname;
		this.email = user.email;
	}

	static get collection() {
		return Model.db.get('users');
	}

	static get schema() {
		return Joi.object().keys({
			fname: Joi.string().alphanum().max(20).required(),
			sname: Joi.string().alphanum().max(20).required(),
			email: Joi.string().email().required()
		});
	}

	static find(object, fn) {
		return UserModel.collection.find(object, fn);
	}

	static insert(object, fn) {
		return UserModel.collection.insert(object, fn);
	}

	insert(fn) {

	}

	// get isValid() {
	// 	if(this.email.includes(' ')) {
	// 		return false;
	// 	}
		
	// 	return true;
	// }
}
