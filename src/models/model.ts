import * as Joi from 'joi';
import monk, { TQuery, ICollection } from 'monk';

export default abstract class Model {

    static db = monk('localhost:27017/durrant-tech');
    static schema: Joi.schema = Joi.object();
    static collection: ICollection;

    constructor(data) {
        Object.assign(this, data);
    }

    save() {
        // Validate object
        // Check if object is already in database (Check for _id attribute)
        // If so, update existing document
        // Otherwise, save to a new object and assign _id attribute to this object
    }

    validate(): Joi.validate {
        return Joi.validate(this, this.constructor.prototype.schema);
    }

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
}