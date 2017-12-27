import monk from 'monk';

import db from './db';

export default class Collection {
	collection;

	constructor(collection) {
		this.collection = db.get(collection);
	}
}
