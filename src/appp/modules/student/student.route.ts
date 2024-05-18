import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

// we will call controller function....
router.post('/create-student', StudentController.createStudent);

export const StudentRoutes = router;
