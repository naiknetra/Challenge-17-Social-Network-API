import { User } from '../models/index.js';
import { Request, Response } from 'express';


export const getUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find();

        

        res.json(users);
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
}
export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}