export default class Collection {
	constructor(collection) {
		this.collection = db.get(collection);
	}
}
