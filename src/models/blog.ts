import * as Joi from 'joi';
import { Schema, model } from 'mongoose';
import monk, { ICollection, TQuery } from 'monk';

import Model from './model';
import UserModel from './user';

export default class BlogModel extends Model {

    static schema: Schema = new Schema({
        title: {
            type: String,
            required: [true, 'Missing field: title']
        },
        author: UserModel.schema,
        body: String,
        coverImage: String,

        comments: [{
            user_id: String,
            body: String,
            meta: {
                posted_date: Date,
                updated_date: Date
            }
        }],

        meta: {
            posted_date: Date,
            updated_date: Date,
            url: {
                type: String,
                required: true,
                unique: true
            }
        }
    });

    static model = model('Blog', BlogModel.schema);

    // static schema: Joi.schema = Joi.object().keys({
    //     title: Joi.string().required().max(50),
    //     author: Joi.string().required(),
    //     body: Joi.string().required(),
    //     coverImage: Joi.string(),

    //     comments: [{
    //         user: Joi.string().required(),
    //         body: Joi.string().required().max(1000),
    //         // edited: Joi.boolean().required(),
    //         // The attribute above can be calculated by whether a meta.updatedDate attribute exists
    //         meta: {
    //             posted_date: Joi.date().required(),
    //             updated_date: Joi.date()
    //         }
    //     }],

    //     meta: {
    //         posted_date: Joi.date().required(),
    //         updated_date: Joi.date()
    //     }
    // });
}