import Page from '../models/page.model';
import Controller from './controller';

export default class PageController extends Controller {

	static homepage(req, res, next) {
		// The query will be used to get a homepage from the database.
		// const query = Model.find();
		// const query = Model.find({ homepage: true }); // or something similar
		// Perhaps I'll include a method in the Pages model for returning the homepage.
	
		// query.then(data => {
	
		// 	const page = res.locals.page;
		// 	page.title = 'Jack Durrant';
		// 	page.body = 'Hello, World!';
		// 	page.theme = 'default';
		// 	page.template = 'home/home';
	
		// 	next();
		// });

		const page = res.locals.page;
		page.title = 'Jack Durrant';
		page.body = 'Hello, World!';
		page.theme = 'default';
		page.content = 'home/home';
		page.sidebar = 'empty/empty';

		next();
	}
}