// import studentSchema from './student.joivalidation';
import catchAsync from '../utils/catchAsync';
import { StudentServices } from './student.service';

// avoid repetition of try catch sue catchAsync

const getAllStudents = catchAsync(async (req, res, next) => {
  const result = await StudentServices.getAllStudentsFromDB();

  res.status(200).json({
    success: true,
    message: 'Getting student data successfully.',
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res, next) => {
  const studentId = req.params.studentId;

  const result = await StudentServices.getSingleStudentFromDb(studentId);
  res.status(200).json({
    success: true,
    message: 'Student single data retrieved successfully!',
    data: result,
  });
});

// delete student using id.......
const deleteStudentWithId = catchAsync(async (req, res, next) => {
  const studentId = req.params.studentId;

  const result = await StudentServices.deleteStudentFromDb(studentId);
  res.status(200).json({
    success: true,
    message: 'Student data deleted successfully!',
    data: result,
  });
});

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudentWithId,
};
