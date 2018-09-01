import * as dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';
import monk, { TQuery, ICollection } from 'monk';

import API from '../api';

dotenv.config();

export default class Model extends API {

    static db = monk(process.env.DB);
    static collection: ICollection;
    static schema: Joi.Schema;

    // GET
    static find(req: Request, res: Response, next?: NextFunction) {
        res.locals.query = this.collection.find(req.query);
        next();
    }

    static findBySlug(req: Request, res: Response, next?: NextFunction) {
        res.locals.query = this.collection.findOne({ slug: req.params.slug });
        next();
    }

    // POST
    static validate(req: Request, res: Response, next?: NextFunction) {
        res.locals.valid = Joi.validate(req.body, this.schema);
        next();
    }

    // ALL
    static processQuery(req: Request, res: Response, next?: NextFunction) {
        res.locals.query
        .then(data => {
            res.locals.data = data;
            next();
        })
        .catch(error => {
            res.locals.error = error;
            next();
        });
    }
}
