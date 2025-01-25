import { Router } from 'express';
import { getUsers, createUser, getSingleUser, updateUser, deleteUser } from '../../controllers/user-controllers.js';
const router = Router();
router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);
export default router;
