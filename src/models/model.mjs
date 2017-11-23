import monk from 'monk';

const db = monk('localhost:27017/durrant-tech');

export default class Model {
	constructor(collection) {
		this.collection = db.get(collection);
	}

	get(object, fn) {
		return this.collection.find(object);
	}

	insert(object, fn) {
		return this.collection.insert(object);
	}

	isValid() {
		return true;
	}

	save() {
		
	}
}

//db.close();
