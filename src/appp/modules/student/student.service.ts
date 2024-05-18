import StudentModel from '../student.model';
import { Student } from './student.interface';

const createStudentIntoDB = async (student: Student) => {
  console.log('my name is dolon chandra roy');
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDb = async (id: string) => {
  const result = await StudentModel.findOne({ _id: id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDb,
};
