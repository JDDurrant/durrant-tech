import monk from 'monk';

const db = monk('localhost:27017/durrant-tech');

export default db;