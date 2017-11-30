import express from 'express';

import Home from './controllers/home';
import User from './controllers/user';
import Validate from './middleware/validate';

const router = express.Router();

router.get('/', Home);
router.get('/add-user', User.form);

router.post('/add-user', User.save, User.catch);

export default router;
