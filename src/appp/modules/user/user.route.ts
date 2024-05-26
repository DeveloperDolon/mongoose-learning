import express from 'express';
import { UserColtrollers } from './user.controller';

const router = express.Router();

router.post('/create-student', UserColtrollers.createStudent);

export const UserRoutes = router;
