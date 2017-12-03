import Joi from 'joi';

import Model from './model';

const collection = Model.db.get('pages');

const schema = Joi.object().keys({

	title: Joi.string().required().max(50),
	body: Joi.string().required(),
	summary: Joi.string().max(200).required(),
	createdAt: Joi.date().required(),
	updatedAt: Joi.date()
});

export default class PageModel extends Model {
	
	static insert(object) {
		
		if(!object.hasOwnProperty('createdAt')) {
			object.createdAt = new Date();
		}

		return Model.find(PageModel, object);
	}

	static find(object) {
		return Model.find(PageModel, object);
	}

	static findOne(id) {
		return Model.findOne(PageModel, { _id: id });
	}

	static findHome() {
		// Not yet finalised
		return Model.findOne(PageModel, { homepage: true })
	}

	static update(id, object) {

		if(!object.hasOwnProperty('updatedAt')) {
			object.updatedAt = new Date();
		}

		return Model.update(PageModel, id, object);
	}

	static remove(id) {
		return Model.remove(PageModel, id);
	}
	
	static get collection() {
		return collection;
	}

	static get schema() {
		return schema;
	}
}
