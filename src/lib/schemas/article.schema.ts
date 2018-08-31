import * as Joi from 'joi';

import ResponseSchema from './response.schema';

export default Joi.object().keys({
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
    responses: Joi.array().items(ResponseSchema),
    visibility: Joi.string().only(
        'public',       // Publicly available and linked on the main pages of my website; promoted content
        'archived',     // Publicly available but only linked on my site's archive pages; demoted content
        'hidden',       // Only available to privileged users and people with the direct URL
        'private'       // Only available to privileged users
    ).required()
});
