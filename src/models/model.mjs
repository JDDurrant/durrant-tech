import Joi from 'joi';
import monk from 'monk';

export const db = monk('localhost:27017/durrant-tech');

export default class Model {
}