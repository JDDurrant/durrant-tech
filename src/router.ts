import * as express from 'express';

import Controller from './controllers/controller';
import HomeController from './controllers/home';
import UserController from './controllers/user';

const router: express.Router = express.Router();

// GET
router.get('*', Controller.init);

router.get('/', HomeController.static, Controller.render);
router.get('/users', UserController.list, Controller.render);
router.get('/users/add', UserController.form, Controller.render);
router.get('/users/:user', UserController.view, Controller.render);

// POST
router.post('/users/add', UserController.save, UserController.then, UserController.catch);

export default router;
