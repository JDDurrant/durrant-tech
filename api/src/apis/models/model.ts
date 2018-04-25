import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';
import monk, { TQuery, ICollection } from 'monk';

import API from '../api';

export default class Model extends API {

    static db = monk('localhost:27017/durrant-tech');
    static collection: ICollection;
    static schema: Joi.Schema;

    static findOneBySlug(req: Request, res: Response, next?: NextFunction) {
        const query = this.collection.findOne({ slug: req.params.slug });
        query.then(data => res.json(data));
    }

    static validate(req: Request, res: Response, next?: NextFunction) {
        res.locals.valid = Joi.validate(req.body, this.schema);
        next();
    }

    static find(req: Request, res: Response, next?: NextFunction) {
        const query = this.collection.find(req.query);

        query.then(data => res.json(data));
        query.catch(err => res.json(err));
    }

    // static find(query: TQuery = {}): Promise<Model[]> {
    //     return this.collection.find(query);
    // }

    // static findOne(query: TQuery): Promise<Model> {
    //     return this.collection.findOne(query);
    // }

    // static findOneById(_id: string): Promise<Model> {
    //     return this.findOne({ _id });
    // }

    // static insert(data: object) {
    //     return this.collection.insert(data);
    // }

    // static update(query: TQuery, data: object, options?: object) {
    //     return options?
    //         this.collection.update(query, data, options):
    //         this.collection.update(query, data);
    // }

    // static findOneAndUpdate(query: TQuery, data: object, options?: object) {
    //     return options?
    //         this.collection.findOneAndUpdate(query, data, options):
    //         this.collection.findOneAndUpdate(query, data);
    // }

    // static findOneAndDelete(query: TQuery, options?: object) {
    //     return options?
    //         this.collection.findOneAndDelete(query, options):
    //         this.collection.findOneAndDelete(query);
    // }
}
