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

	static respond(req: Request, res: Response, next?: NextFunction) {
		res.json(res.locals);
	}

	static test(req: Request, res: Response, next?: NextFunction) {
		console.log('Request headers:', req.headers);		
		res.json('test');
	}
}
