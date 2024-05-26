import StudentModel from '../student.model';

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();

  return result;
};

const getSingleStudentFromDb = async (id: string) => {
  // const result = await StudentModel.findOne({ _id: id });
  const result = await StudentModel.aggregate([{ $match: { id: id } }]);

  return result;
};

const deleteStudentFromDb = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });

  return result;
};

export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDb,
  deleteStudentFromDb,
};
