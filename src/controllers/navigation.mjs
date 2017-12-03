export default class Navigation {

    static render(req, res, next) {

        const navigation = req.app.navigation;

        next();
    }
}