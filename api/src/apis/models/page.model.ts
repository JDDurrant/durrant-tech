import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';
import monk, { ICollection, TQuery } from 'monk';

import Model from './model';

export default class PageModel extends Model {
	
	static collection = Model.db.get('pages');

	static schema = Joi.object().keys({
		title: Joi.string().max(50).required(),
		body: Joi.string().required(),
		meta: Joi.object().keys({
			summary: Joi.string().max(200).required(),
			// tags: Joi.array().items(Joi.string), // Do pages need tags?
			date: Joi.object().keys({
				created: Joi.date().required(),
				updated: Joi.date()
			}),
			slug: Joi.string().max(50).required()
		})
	});

	// POST
	static generateDate(req: Request, res: Response, next?: NextFunction) {
		const date = req.body.meta.date.created;
		req.body.meta.date.created = date || new Date();
		next();
	}
}
