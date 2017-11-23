import Model from './model';

export default class User extends Model {
	constructor(user) {
		this.fname = user.fname;
		this.sname = user.sname;
		this.email = user.email;
	}

	isValid() {
		if(this.email.includes(' ')) {
			return false;
		}
		
		return true;
	}
}

export const users = new Model('users');
