import { Router } from 'express';
import { getUsers, createUser } from '../../controllers/user-controllers.js';
const router = Router();
router.route('/').get(getUsers).post(createUser);
export default router;
