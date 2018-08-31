import * as Joi from 'joi';

export default Joi.object().keys({
    title: Joi.string().max(50).required(),
    body: Joi.string().required(),
    meta: Joi.object().keys({
        summary: Joi.string().max(200).required(),
        // tags: Joi.array().items(Joi.string), // Do pages need tags?
        date: Joi.object().keys({
            created: Joi.date().required(),
            updated: Joi.date()
        }),
        slug: Joi.string().max(50).required()
    })
});
