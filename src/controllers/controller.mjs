export default {
    
    init(req, res, next) {
        // Allow controllers to check if URL points to static resource
        res.locals.resource = req.path.startsWith('/res');
        // Prevent execution of this method for static resources in public/
        if(!res.locals.resource) {
            res.locals.page = {};
            res.locals.site = req.app.locals.site;
        }
        
        next();
    },

    render(req, res, next) {
        // Prevent execution of this method for static resources in public/
        if(!res.locals.resource) {
            console.log("<Render>");
            console.log(res.locals);
            console.log("</Render>");
            res.render('index', res.locals);
        }

        next();
    }
}