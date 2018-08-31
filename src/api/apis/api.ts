import { Request, Response, NextFunction } from 'express';

export default class API {
	/**
	 * A base class for APIs which don't interact with the database; consider including the following:
	 * - homepage.api: HomepageAPI
	 * - navigation.api: NavigationAPI
	 * - public-files.api: PublicFilesAPI
	 * - search.api: SearchAPI
	 * 
	 * Consider the following methods:
	 * - sessionCheck
	 */

	// GET
	static test(req: Request, res: Response, next?: NextFunction) {		
		res.locals.data = {
			title: 'test'
		};

		next();
	}

	// ALL
	static site(req: Request, res: Response, next?: NextFunction) {
		res.json(res.locals.site);
	}

	static page(req: Request, res: Response, next?: NextFunction) {
		res.json(res.locals.data);
	}
}
