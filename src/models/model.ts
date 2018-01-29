import * as Joi from 'joi';
import monk, { TQuery } from 'monk';

export default class Model {

    static db = monk('localhost:27017/durrant-tech');

    static schema: Joi.schema = Joi.object();

    static find(model, object?: object) {
        object = object || {};
		return model.collection.find(object);
    }
    
    static findById(model, id) {
        return model.collection.findOne({ _id: id });
    }
    
    static insert(model, obj): Joi.validate {
        
        const validate: Joi.validate = Joi.validate(obj, model.schema);
        return validate.then(data => model.collection.insert(obj));
    }

    static update(model, id, object) {
        return model.collection.update({ _id: id }, object);
    }
    
    static remove(model, id) {
        return model.collection.remove({ _id: id });
    }

    validate(): Joi.validate {
        return Joi.validate(this, Model.schema);
    }
}