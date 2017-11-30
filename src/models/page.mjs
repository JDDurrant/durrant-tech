import Joi from 'joi';

import Model, { db } from './model';

const collection = db.get('pages');

const schema = Joi.object().keys({

	title: Joi.string().required().max(50),
	body: Joi.string().required(),
	summary: Joi.string().max(200).required(),
	createdAt: Joi.date(),
	updatedAt: Joi.date()
});

export default class PageModel extends Model {

}
