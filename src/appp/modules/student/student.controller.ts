import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { student } = req.body;
    console.log(student);

    const result = await StudentServices.createStudentIntoDB(student);

    res.status(200).json({
      success: true,
      message: 'Student is created successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err?.message);
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
    console.log(err.message);
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
};
