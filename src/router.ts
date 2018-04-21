import * as express from 'express';

import Controller from './controllers/controller';
import PageController from './controllers/page.controller';
import UserController from './controllers/user.controller';

const router: express.Router = express.Router();

// GET
router.get('*', Controller.init);

router.get('/', PageController.homepage, Controller.render);

// router.get('/blog');
// router.get('/blog/:category');
// router.get('/blog/:category/:entry');

router.get('/users', UserController.list, Controller.render);
router.get('/users/add', UserController.form, Controller.render);
router.get('/users/:user', UserController.view, Controller.render);

// At the bottom so it doesn't interfere with other routes
router.get('/:page', PageController.read, Controller.render);

// POST
router.post('/users/add', UserController.save, UserController.then, UserController.catch);

export default router;
