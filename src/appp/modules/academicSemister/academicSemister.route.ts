import express from 'express';
import { AcademicSemesterController } from './academicSemister.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { AcademicSemesterValidations } from './academicSemister.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(AcademicSemesterValidations.createAcademicSemesterValidation),
  AcademicSemesterController.createAcademicSemester,
);

export const AcademicSemesterRoutes = router;
