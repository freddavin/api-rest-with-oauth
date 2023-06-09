import { Router } from 'express';
import {
  readUsersHandler,
  readUserHandler,
  createUserHandler,
  deleteUserHandler,
  updateUserHandler,
} from '../controllers/user.controller';

export const userRouter = Router();

userRouter.post('/', createUserHandler);
userRouter.get('/', readUsersHandler);
userRouter.get('/:id', readUserHandler);
userRouter.delete('/:id', deleteUserHandler);
userRouter.patch('/:id', updateUserHandler);
