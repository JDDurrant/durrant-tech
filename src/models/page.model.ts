import * as Joi from 'joi';
import monk, { ICollection, TQuery } from 'monk';

import Model from './model';

export default class Page extends Model {

	static schema: Joi.schema = Joi.object().keys({
		title: Joi.string().required().max(50),
		body: Joi.string().required(),
		summary: Joi.string().max(200).required(),
		slug: Joi.string().max(200).required(),
		createdAt: Joi.date().required(),
		updatedAt: Joi.date()
	});

	static collection: ICollection = Model.db.get('pages');

	// static find(object): TQuery {
	// 	return Model.find(PageModel, object);
	// }

	// static findOne(id): TQuery {
	// 	return Model.findById(PageModel, { _id: id });
	// }

	// static findHome(): TQuery {
	// 	// Not yet finalised
	// 	return Model.findById(PageModel, { homepage: true })
	// }

	static findBySlug(slug: string) {
		return Page.findOne({ slug: slug });
	}
	
	static insert(object): TQuery {
		
		if(!object.hasOwnProperty('createdAt')) {
			object.createdAt = new Date();
		}

		return Page.find(object);
	}

	// static update(id, object): TQuery {

	// 	if(!object.hasOwnProperty('updatedAt')) {
	// 		object.updatedAt = new Date();
	// 	}

	// 	return Model.update(Page, id, object);
	// }

	// static remove(id): TQuery {
	// 	return Model.remove(Page, id);
	// }
}
