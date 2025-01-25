import { Router } from 'express';
import {getUsers, createUser, getSingleUser, updateUser} from '../../controllers/user-controllers.js';


const router = Router();

router.route('/').get(getUsers).post(createUser);



router.route('/:userId').get(getSingleUser).put(updateUser);




export default router;