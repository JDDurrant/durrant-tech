import Joi from 'joi';
import monk from 'monk';

export const db = monk('localhost:27017/durrant-tech');

export default {

    db: monk('localhost:27017/durrant-tech'),
    
    insert(model, object) {
        
        const validate = Joi.validate(object, model.schema);

        return validate.then(data => {
            const insert = model.collection.insert(object);
            
            insert.catch(err => {
                console.log("Couldn't add user:", err);
            });
        });
    },

    find(model, object) {
        object = object || {};
		return model.collection.find(object);
    },
    
    findOne(model, id) {
        return model.collection.findOne({ _id: id });
    },

    update(model, id, object) {
        return model.collection.update({ _id: id }, object);
    },
    
    remove(model, id) {

        return model.collection.remove({ _id: id });
    }
}