import Model from './model';

const model = new Model('users');

export default class UserModel extends Model {
	constructor(user) {
		super();

		this.fname = user.fname;
		this.sname = user.sname;
		this.email = user.email;

		//this.model = new Model('users');
		console.log(model);
	}

	static find(object, fn) {
		return model.find(object, fn);
	}

	static insert(object, fn) {
		return model.insert(object, fn);
	}

	get isValid() {
		if(this.email.includes(' ')) {
			return false;
		}
		
		return true;
	}
}
