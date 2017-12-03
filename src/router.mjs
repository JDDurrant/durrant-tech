import express from 'express';

import Controller from './controllers/controller';
import HomeController from './controllers/home';
import UserController from './controllers/user';

const router = express.Router();

// GET
router.get('*', Controller.init);

router.get('/', HomeController.static);
router.get('/add-user', UserController.form);
router.get('/users', UserController.list);

router.get('*', Controller.render); // Referencing Controller.render only once is more convenient, but
// this results in the method being called multiple times for each GET request.

// POST
router.post('/add-user', UserController.save, UserController.then, UserController.catch);

export default router;
