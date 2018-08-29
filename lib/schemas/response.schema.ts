import * as Joi from 'joi';

export default Joi.object().keys({
    user_id: Joi.string().required(),
    body: Joi.object().keys({
        html: Joi.string().required(),
        md: Joi.string().required()
    }),
    index: Joi.number().required(),
    replies: Joi.array().items(Joi.object().keys({
        user_id: Joi.string().required(),
        body: Joi.string().required(),
        index: Joi.number().required()
    }))
});
