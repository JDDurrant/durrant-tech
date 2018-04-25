import * as express from 'express';

import API from './apis/api';
import ArticleModel from './apis/models/article.model';
import PageModel from './apis/models/page.model';
import UserModel from './apis/models/user.model';

// import Controller from './controllers/controller';
// import PageController from './controllers/page.controller';
// import UserController from './controllers/user.controller';

const router: express.Router = express.Router();

// GET
// router.get('*', Controller.init);

router.get('/', API.test.bind(API));

router.get('/blog', ArticleModel.find.bind(ArticleModel));
// router.get('/blog/:category');
// router.get('/blog/:category/:slug');

router.get('/users', UserModel.find.bind(UserModel));
// router.get('/users/add', UserController.form, Controller.render);
// router.get('/users/:slug', UserController.view, Controller.render);

// At the bottom so it doesn't interfere with other routes
// router.get('/:slug', PageController.read, Controller.render);

// POST
// router.post('/users/add', UserController.save, UserController.then, UserController.catch);

export default router;
