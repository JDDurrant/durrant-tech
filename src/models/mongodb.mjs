import monk from 'monk';

const db = monk('localhost:27017/durrant-tech');

console.log('Database connection script running');
//console.log(db);

const collection = db.get('test-collection');

const insert = collection.insert({
	first: "Jack",
	last: "Durrant",
	dob: "19950609"
});

insert.then(docs => {
	console.log(docs);
});

insert.catch(err => {
	console.log(err);
});

const query = collection.find();

query.then(data => {
	console.log(data);
});
