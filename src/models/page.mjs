import Model from './model';

const model = new Model('pages');

export default class Page {

	constructor(page) {
		this.title = page.title;
		this.body = page.body;
		this.summary = page.summary;
		this.createdAt = page.createdAt;
		this.updatedAt = page.updatedAt;
	}
}
