import * as Joi from 'joi';
import monk, { TQuery, ICollection } from 'monk';

export default /* abstract */ class Model {

    static db = monk('localhost:27017/durrant-tech');
    static collection: ICollection;
    schema: Joi.schema = Joi.object();
    collection: ICollection = Model.collection;

    data: object = {};

    constructor(data) {
        /**
         * Consider replacing the line below this block with:
         * this.data = data;
         * 
         * Otherwise, assign values directly to this:
         * Object.assign(this, data);
         */
        Object.assign(this.data, data); // Consider replacing with: this.data = data;
    }

    static /* async */ find(data?): Promise<Model[]> {

        return this.collection.find(data || {});
    }

    static /* async */ insert(data: object) {

        // console.log("Data:", data); // Works
        // console.log("Class:", this);
        // console.log("Constructor:", this.constructor);
        // console.log("Schema:", this.schema);

        const object = new this(data);

        return object.save();

        // const { error, value } = data.validate();

        // if(error == null) {
        //     return 
        // }
    }

    /* async */ save(): TQuery {
        // console.log("Object:", this);

        // Validate object
        const valid = this.validate();
        // console.log(valid);

        const error = valid.error;
        const value = valid.value;

        // console.log("Validation object:", valid);

        if(error == null) {
            // Modify to determine whether to update an existing document or create a new one
            return this.collection.insert(value);
        } else {
            throw error;
        }

        // // Check if object is already in database (Check for _id attribute)
        // if('_id' in this.data) {
        //     // If so, update existing document
            
        // } else {
        //     // Otherwise, save to a new object and assign _id attribute to this object

        // }
    }

    validate(): Joi.validate {
        /**
         * This instance method is intended for use with derivatives of this
         * class. I want it to have access to static field variables
         * within derivative classes, including static schema: Joi.schema.
         */
        // console.log("Collection:", this.collection);
        // console.log("Schema:", this.schema);  // undefined
        // console.log("Prototype:", this.constructor.prototype);      // User {}
        // console.log("Constructor:", this.constructor);              // class User extends Model { ... }
        // console.log("This:", this);                                 // User { data: { ... } }

        return Joi.validate(this.data, this.schema);
    }

    // static find(model, object?: object) {
    //     object = object || {};
	// 	return model.collection.find(object);
    // }
    
    // static findById(model, id) {
    //     return model.collection.findOne({ _id: id });
    // }
    
    // Rewrite using object-oriented programming principles
    // static insert(model, obj): Joi.validate {
        
    //     const validate: Joi.validate = Joi.validate(obj, model.schema);
    //     return validate.then(data => model.collection.insert(obj));
    // }
    
    static remove(model, id) {
        return model.collection.remove({ _id: id });
    }

    // Ensure that all references to this method are deleted, then delete the method
    static update(model, id, object) {
        return model.collection.update({ _id: id }, object);
    }
}