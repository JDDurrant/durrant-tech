import * as Joi from 'joi';
import monk, { TQuery, ICollection } from 'monk';

export default /* abstract */ class Model {

    static db = monk('localhost:27017/durrant-tech');
    static collection: ICollection;
    static schema: Joi.schema = Joi.object();
    collection: ICollection = Model.collection;
    schema: Joi.schema = Model.schema;

    data: object = {};

    constructor(data) {
        /** Consider replacing the line below this block with:
         *  this.data = data;
         *  
         *  Otherwise, assign values directly to this:
         *  Object.assign(this, data); */

        Object.assign(this.data, data);
        // Consider replacing with: this.data = data;
    }

    static /* async */ find(data = {}): Promise<Model[]> {
        return this.collection.find(data);
    }

    static /* async */ findOne(data): Promise<Model> {
        return this.collection.findOne(data);
    }

    static /* async */ findById(_id): Promise<Model> {
        return this.findOne({ _id });
    }

    static /* async */ insert(data: object) {

        const object = new this(data);

        return object.save();

        // const { error, value } = data.validate();

        // if(error == null) {
        //     return 
        // }
    }

    /* async */ save(): TQuery {
        // Validate object
        const { error, value } = this.validate();

        if(error != null) throw error;

        if('_id' in this.data) {
            return this.constructor.collection.findOneAndUpdate({ _id: this.data._id }, this.data);
        }
        else {
            return this.constructor.collection.insert(this.data);
        }

        // if(error == null) {
        //     // Modify to determine whether to update an existing document or create a new one
        //     return this.collection.insert(value);
        // } else {
        //     throw error;
        // }

        // // Check if object is already in database (Check for _id attribute)
        // if('_id' in this.data) {
        //     // If so, update existing document
            
        // } else {
        //     // Otherwise, save to a new object and assign _id attribute to this object

        // }
    }

    validate(): Joi.validate {
        /** This instance method is intended for use with derivatives of this
         *  class. I want it to have access to static field variables
         *  within derivative classes, including static schema: Joi.schema.
         * 
         *  I could also store the collection and schema for each model as 
         *  instance variables, I would have to do this for each model class.
         *  This involves code repetition, which I'd like to avoid. */

        // return Joi.validate(this.data, this.schema);
        return Joi.validate(this.data, this.constructor.schema);
    }
    
    // Rewrite using object-oriented programming principles
    //    
    // static remove(model, id) {
    //     return model.collection.remove({ _id: id });
    // }

    // Ensure that all references to this method are deleted, then delete the method
    // static update(model, id, object) {
    //     return model.collection.update({ _id: id }, object);
    // }
}