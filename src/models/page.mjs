import Joi from 'joi';

import Model, { db } from './model';

export const collection = db.get('pages');

export const schema = Joi.object().keys({
	
	title: Joi.string().required().max(50),
	body: Joi.string().required(),
	summary: Joi.string().max(200).required(),
	createdAt: Joi.date(),
	updatedAt: Joi.date()
});
// const model = new Model('pages');

export default class PageModel extends Model {

	// Are constructors necessary? I'll comment them out
	// until I start using them.
	// constructor(page) {

	// 	this.data = {
	// 		title: page.title,
	// 		body: page.body,
	// 		summary: page.summary,
	// 		createdAt: page.createdAt,
	// 		updatedAt: page.updatedAt
	// 	}
	// }
}
