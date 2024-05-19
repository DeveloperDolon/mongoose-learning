import StudentModel from '../student.model';
import { Student } from './student.interface';

const createStudentIntoDB = async (studentData: Student) => {
  // const result = await StudentModel.create(student);
  const student = new StudentModel(studentData);

  //if student is exist.

  if (await student.isUserExists(studentData?.id)) {
    throw new Error('User already exists....');
  }
  const result = await student.save(); // builtin mongoose instance method

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
