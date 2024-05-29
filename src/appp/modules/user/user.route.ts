import express from 'express';
import { UserColtrollers } from './user.controller';
import { createStudentValidationSchema } from '../student/student.zodvalidation';
import { validateRequest } from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(createStudentValidationSchema),
  UserColtrollers.createStudent,
);

export const UserRoutes = router;
