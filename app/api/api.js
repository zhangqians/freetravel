import express from 'express';
import userApi from './user-api'
import loginApi from './login-api'

const router = express.Router();

router.use('/user', userApi);
router.use('/login', loginApi);

export default router;
