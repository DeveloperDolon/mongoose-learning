import express from 'express';
import { AcademicSemesterController } from './academicSemister.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { AcademicSemesterValidations } from './academicSemister.validation';

const router = express.Router();

// api route for create a academic semester
router.post(
  '/create-academic-semester',
  validateRequest(AcademicSemesterValidations.createAcademicSemesterValidation),
  AcademicSemesterController.createAcademicSemester,
);

// api route for update a academic semester
router.put(
  '/update-academic-semester/:id',
  validateRequest(AcademicSemesterValidations.updateAcademicSemesterValidation),
  AcademicSemesterController.updateAcademicSemester,
);

export const AcademicSemesterRoutes = router;
