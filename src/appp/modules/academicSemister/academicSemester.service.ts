import { AcademicSemesterModel } from './academic.model';
import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemister.interface';

// for creating a data on academic semester db
const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload?.name] !== payload?.code) {
    throw new Error('Invalid semester code...!');
  }

  const result = await AcademicSemesterModel.create(payload);

  return result;
};

// for updating a data on academic semester db
const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid semester code.');
  }

  const result = await AcademicSemesterModel.updateOne({ _id: id }, payload, {
    new: true,
  });

  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  updateAcademicSemesterIntoDB,
};
