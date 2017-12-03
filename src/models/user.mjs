import Joi from 'joi';

import Model from './model';

const collection = Model.db.get('users');

const schema = Joi.object().keys({
	fname: Joi.string().alphanum().max(20).required(),
	sname: Joi.string().alphanum().max(20).required(),
	email: Joi.string().email().required()
});

export default {

	collection: Model.db.get('users'),
	
	schema: Joi.object().keys({
		fname: Joi.string().alphanum().max(20).required(),
		sname: Joi.string().alphanum().max(20).required(),
		email: Joi.string().email().required()
	}),
	
	insert(object) {
		return Model.insert(this, object)
	},

	find(object) {
		return Model.find(this, object);
	}
}
