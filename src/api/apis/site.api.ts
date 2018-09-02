import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs-extra';

import API from './api';

export default class SiteAPI extends API {

    static file = fs.readFile(`${__dirname}/../../../site.json`);

    static site(req: Request, res: Response, next?: NextFunction) {
        this.file
        .then(buffer => buffer.toString())
        .then(string => JSON.parse(string))
        .then(site => {
            res.locals.site = site;
            next();
        });
    }
}
