import express from 'express';
import userApi from './users-api'
import loginApi from './sessions-api'

const router = express.Router();

router.use('/users', userApi);
router.use('/sessions', loginApi);

export default router;
