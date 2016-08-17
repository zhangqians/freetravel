import express from 'express';
import userApi from './userApi'

const router = express.Router();

router.use('/user', userApi);

export default router;
