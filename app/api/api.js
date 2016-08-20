import express from 'express';
import userApi from './users-api';
import loginApi from './sessions-api';
import cookieState from './cookieState';

const router = express.Router();

router.use('/users', userApi);
router.use('/sessions', loginApi);
router.use('/personal',cookieState);

export default router;
