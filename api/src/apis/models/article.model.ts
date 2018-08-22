import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';
import monk, { ICollection, TQuery } from 'monk';

import Model from './model';
import PageModel from './page.model';

export default class ArticleModel extends PageModel {

	static collection = Model.db.get('blog');

	static schema = Joi.object().keys({
		title: Joi.string().max(50).required(),
		body: Joi.string().required(),
		meta: Joi.object().keys({
			summary: Joi.string().max(200).required(),
			category: Joi.array().items(Joi.string()).required(),
			tags: Joi.array().items(Joi.string()),
			date: Joi.object().keys({
				created: Joi.date().required(),
				updated: Joi.date()
			}),
			slug: Joi.string().max(50).required()
		}),
		responses: Joi.array().items(Joi.object().keys({
			user_id: Joi.string().required(),
			body: Joi.object().keys({
				html: Joi.string().required(),
				md: Joi.string().required()
			}),
			index: Joi.number().required(),
			replies: Joi.array().items(Joi.object().keys({
				user_id: Joi.string().required(),
				body: Joi.string().required(),
				index: Joi.number().required()
			}))
		}))
	});

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
