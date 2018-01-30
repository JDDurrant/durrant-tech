import Model from '../models/model'

export default class Controller {

    static model = Model;

    // Insert data into the collection belonging to the derivative controller's model
    static insert(req, res, next) {
        
        const data = new this.model(req.body);
        data.save();
    }
    
    // Supply data to a request to initialise it
    static init(req, res, next) {
        // Allow controllers to check if URL points to static resource
        res.locals.resource = req.path.startsWith('/res');
        // Prevent execution of this method for static resources in public/
        if(!res.locals.resource) {
            res.locals.page = {};
            res.locals.site = req.app.locals.site;
        }
        
        next();
    }

    // Render a page using data supplied by init(req, res, next)
    static render(req, res, next) {
        // Prevent execution of this method for static resources in public/
        if(!res.locals.resource) {
            res.render('index', res.locals);
        }

        next();
    }
}