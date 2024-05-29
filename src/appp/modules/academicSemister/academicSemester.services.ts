import { AcademicSemesterModel } from './academic.model';
import { TAcademicSemester } from './academicSemister.interface';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  const result = await AcademicSemesterModel.create(payload);

  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
};
