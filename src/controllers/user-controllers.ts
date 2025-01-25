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
export const getSingleUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({ _id: req.params.userId });
        
        res.json(user);
        
    } catch (err) {
        res.status(500).json(err);
    }
}
export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.userId }, {$set: req.body}, {new: true, runValidators: true});
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}
export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.userId });
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}