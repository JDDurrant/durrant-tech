import express from 'express';

import home from './controllers/home';
import User from './controllers/user';

const router = express.Router();

router.get('/', home);

router.post('/add-user', User.add);

export default router;
