import config from '../../config';
import StudentModel from '../student.model';
import { Student } from '../student/student.interface';
import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createStudentIntoDB = async (password: string, studentData: Student) => {
  // create a user object
  const userData: Partial<TUser> = {};

  if (await StudentModel.isUserExistStudent(studentData.id)) {
    throw new Error('User already exist....vai');
  }

  userData.password = password || (config.default_password as string);

  // set a student role
  userData.role = 'student';

  // set manually genaterated id
  userData.id = '3434353534';

  const newUser = await UserModel.create(userData);
  // const student = new StudentModel(studentData);

  // create a student
  if (Object.keys(newUser).length) {
    // set id, _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }

  // //if student is exist.

  // if(await student.isUserExists(studentData?.id)) {
  //   throw new Error("User already exists....");
  // }
  // const result = await student.save(); // builtin mongoose instance method
  // instance method implemented end from here----------------->
  return newUser;
};

export const UserService = {
  createStudentIntoDB,
};
