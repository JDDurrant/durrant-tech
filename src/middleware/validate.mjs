import Joi from 'joi';

import Model from '../models/model';
import User from '../models/user';

// export default class Validate {

//     user(req, res, next) {
//         return Model.validate(User.schema);
//     }
// }

export default function Validate(schema) {
    
    return (req, res, next) => {
        const check = Joi.validate(req.body, schema);

        check.then(data => {
            res.locals.valid = true;
            next();
        });

        check.catch(err => {
            res.locals.valid = false;
            next();
        });
    };
}
