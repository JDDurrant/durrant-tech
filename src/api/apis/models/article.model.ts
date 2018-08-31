import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';
import monk, { ICollection, TQuery } from 'monk';

import ArticleSchema from '../../../lib/schemas/article.schema';
import Model from './model';
import PageModel from './page.model';

export default class ArticleModel extends PageModel {

	static collection = Model.db.get('blog');
	static schema = ArticleSchema;

	// GET
	static list(req: Request, res: Response, next?: NextFunction) {
		res.locals.query = this.collection.find({});
		next();
	}

	static listByCategory(req: Request, res: Response, next?: NextFunction) {

		res.locals.query = this.collection.find({
			meta: {
				category: req.params.category
			}
		});

		next();
	}

	// POST
	static addResponse(req: Request, res: Response, next?: NextFunction) {
		// Add a comment/response to an article
	}

	static addReply(req: Request, res: Response, next?: NextFunction) {
		// Reply to a comment on an article
	}
}
