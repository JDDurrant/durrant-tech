import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';
import monk, { ICollection, TQuery } from 'monk';

import Model from './model';

export default class ArticleModel extends Model {
	/**
	 * Should this class extend PageModel?
	 * -> Write all the required methods for PageModel. If they all have a place within
	 *    this class, set it up to extend PageModel.
	 */

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

	/**
	 * Methods to implement:
	 * - populateData: Assign default values to properties like date.created
	 */

	static findByCategory(req: Request, res: Response, next: NextFunction) {

		const query = this.collection.find({
			meta: {
				category: req.params.category
			}
		});

		query.then(data => res.json(data));
	}

	static addResponse(req: Request, res: Response, next: NextFunction) {
		// Add a comment/response to an article
	}

	static addReply(req: Request, res: Response, next: NextFunction) {
		// Reply to a comment on an article
	}
}

// export default class Article extends Model {

//     static schema: Joi.Schema = Joi.object().keys({
//         title: Joi.string().required().max(50),
//         user_id: Joi.string().required(),
//         body: Joi.string().required(),
//         coverImage: Joi.string(),

//         comments: [{
//             user_id: Joi.string().required(),
//             body: Joi.string().required().max(1000),
//             // edited: Joi.boolean().required(),
//             // The attribute above can be calculated by whether a meta.updatedDate attribute exists
//             meta: {
//                 postedDate: Joi.date().required(),
//                 updatedDate: Joi.date()
//             }
//         }],

//         meta: {
//             postedDate: Joi.date().required(),
//             updatedDate: Joi.date()
//         }
//     });

//     static collection: ICollection = Model.db.get('articles');
// }
