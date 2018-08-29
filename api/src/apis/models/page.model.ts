import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';
import monk, { ICollection, TQuery } from 'monk';

import PageSchema from '../../../../lib/schemas/page.schema';
import Model from './model';

export default class PageModel extends Model {
	
	static collection = Model.db.get('pages');
	static schema = PageSchema;

	// POST
	static generateDate(req: Request, res: Response, next?: NextFunction) {
		const date = req.body.meta.date.created;
		req.body.meta.date.created = date || new Date();
		next();
	}
}
