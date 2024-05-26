import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import sendResponse from '../utils/sendResponse';
import httpStatus from 'http-status';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { password, student } = req.body;

    // creating a schema validation using zod

    // validate student data using joi schema---????
    // const { error, value } = studentSchema.validate(student);
    // const zodParsedData = studentZodSchema.parse(student);
    const result = await UserService.createStudentIntoDB(password, student);

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: error.message,
    //     error: error.details,
    //   });
    // }

    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: true,
      message: 'Student is created successfull.',
      data: result,
    });
    // res.status(200).json({
    //   success: true,
    //   message: 'Student is created successfully!',
    //   data: result,
    // });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    next(err);
  }
};

export const UserColtrollers = {
  createStudent,
};
