import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

// we will call controller function....
// router.post('/create-student', StudentController.createStudent);

// get students data
router.get('/', StudentController.getAllStudents);

// get single student data
router.get('/:studentId', StudentController.getSingleStudent);

// student delete api
router.delete('/:studentId', StudentController.deleteStudentWithId);

export const StudentRoutes = router;
