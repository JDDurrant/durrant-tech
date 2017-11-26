import monk from 'monk';

const db = monk('localhost:27017/durrant-tech');

export default class Model {

	static get db() {
		return db;
	}

	// isValid() {
	// 	return true;
	// }
}

// db.close();
