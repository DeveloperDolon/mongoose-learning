import { NextFunction, Request, Response } from 'express';

const globalErrorHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  const statusCode4 = 500;
  const message = err?.message || 'Something went wrong!';

  return res.status(statusCode4).json({
    success: false,
    message,
    error: err,
  });
};

export default globalErrorHandler;
