import * as Joi from 'joi';

export default Joi.object().keys({
    name: Joi.string().alphanum().max(20).required(),
    email: Joi.string().email().required(),
    slug: Joi.string().max(20),
    links: Joi.object().keys({
        website: Joi.string().uri({
            scheme: ['http', 'https']
        }),
        github: Joi.string(),
        youtube: Joi.string(),
        twitter: Joi.string(),
        facebook: Joi.string()
    }),
    authentication: Joi.object().keys({
        password: Joi.string().min(8)
    })
});
