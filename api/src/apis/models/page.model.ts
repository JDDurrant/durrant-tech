import * as Joi from 'joi';
import monk, { ICollection, TQuery } from 'monk';

import Model from './model';

export default class PageModel extends Model {
	
	static collection = Model.db.get('pages');

	static schema = Joi.object().keys({
		title: Joi.string().max(50).required(),
		body: Joi.object().keys({
			html: Joi.string().required(),
			md: Joi.string().required()
		}),
		summary: Joi.string().max(200).required(),
		slug: Joi.string().max(50).required(),
		date: Joi.object().keys({
			created: Joi.date().required(),
			updated: Joi.date()
		})
	});

	/**
	 * Methods to implement:
	 * - populateData: Assign default values to properties like date.created
	 */
}
