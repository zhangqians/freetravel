import express from 'express';
import userApi from './user-api'
import loginApi from './login-api'

const router = express.Router();

router.use('/users', userApi);
router.use('/sessions', loginApi);

export default router;
