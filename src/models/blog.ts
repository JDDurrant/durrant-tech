import * as Joi from 'joi';
import monk, { ICollection, TQuery } from 'monk';

import Model from './model';

export default class BlogModel extends Model {

    static schema: Joi.schema = Joi.object().keys({
        title: Joi.string().required().max(50),
        author: Joi.string().required(),
        body: Joi.string().required(),
        coverImage: Joi.string(),

        comments: [{
            user: Joi.string().required(),
            body: Joi.string().required().max(1000),
            // edited: Joi.boolean().required(),
            // The attribute above can be calculated by whether a meta.updatedDate attribute exists
            meta: {
                postedDate: Joi.date().required(),
                updatedDate: Joi.date()
            }
        }],

        meta: {
            postedDate: Joi.date().required(),
            updatedDate: Joi.date()
        }
    });
}