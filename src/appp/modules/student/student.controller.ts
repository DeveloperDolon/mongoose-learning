// import studentSchema from './student.joivalidation';
import { StudentServices } from './student.service';
import { Request, Response } from 'express';
import studentZodSchema from './student.zodvalidation';

const createStudent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { student } = req.body;

    // creating a schema validation using zod

    // validate student data using joi schema---????
    // const { error, value } = studentSchema.validate(student);
    const zodParsedData = studentZodSchema.parse(student);
    const result = await StudentServices.createStudentIntoDB(zodParsedData);

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: error.message,
    //     error: error.details,
    //   });
    // }

    res.status(200).json({
      success: true,
      message: 'Student is created successfully!',
      data: result,
    });
  } catch (err: unknown) {
    // console.log(err.message);
    res.status(500).json({
      success: false,
      message: err.message || err,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Getting student data successfully.',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.studentId;

    const result = await StudentServices.getSingleStudentFromDb(studentId);
    res.status(200).json({
      success: true,
      message: 'Student single data retrieved successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
