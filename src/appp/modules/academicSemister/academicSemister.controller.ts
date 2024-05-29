import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../utils/sendResponse';
import catchAsync from '../utils/catchAsync';
import { AcademicSemesterServices } from './academicSemester.services';

const createAcademicSemester: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is created successful.',
    data: result,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
};
