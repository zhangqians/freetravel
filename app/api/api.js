import express from 'express';
import userApi from './users-api';
import loginApi from './sessions-api';
import personal from './personal';
import ProductApi from './products-api';

const router = express.Router();

router.use('/users', userApi);
router.use('/sessions', loginApi);
router.use('/personal', personal);
router.use('/products', ProductApi);

export default router;
