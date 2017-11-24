import monk from 'monk';

const db = monk('localhost:27017/durrant-tech');

export default class Model {
	constructor(collection) {
		this.collection = db.get(collection);
	}

	find(object, fn) {
		object = object || {};
		fn = fn || false;

		const query = this.collection.find(object);

		if(fn) query.then(fn);

		return query;
	}

	insert(object, fn) {
		const query = this.collection.insert(object);

		if(fn) query.then(fn);

		return query;
	}

	isValid() {
		return true;
	}

	save() {
		
	}
}

//db.close();
