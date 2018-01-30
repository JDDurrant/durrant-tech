import Controller from './controller';

export default class NavigationController extends Controller {

    static render(req, res, next) {

        const navigation = req.app.navigation;

        next();
    }
}