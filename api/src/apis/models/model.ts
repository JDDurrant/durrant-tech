import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';
import monk, { TQuery, ICollection } from 'monk';

import API from '../api';

export default class Model extends API {

    static db = monk('localhost:27017/durrant-tech');
    static collection: ICollection;
    static schema: Joi.Schema;

    static findBySlug(req: Request, res: Response, next?: NextFunction) {
        const query = this.collection.findOne({ slug: req.params.slug });
        query.then(data => res.json(data));
    }

    static validate(req: Request, res: Response, next?: NextFunction) {
        res.locals.valid = Joi.validate(req.body, this.schema);
        next();
    }

    // Does the method below have a meaningful purpose?
    //
    static find(req: Request, res: Response, next?: NextFunction) {
        const query = this.collection.find(req.query);

        query.then(data => res.json(data));
        query.catch(err => res.json(err));
    }
}
