import { model, Schema } from 'mongoose';
import { AcademicSemester, TMonths } from './academicSemister.interface';

const months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const academicSemesterSchema = new Schema<AcademicSemester>(
  {
    name: {
      type: String,
      required: true,
    },
    year: {
      type: Date,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      enum: months,
    },
    endMouth: {
      type: String,
      enum: months,
    },
  },
  {
    timestamps: true,
  },
);

export const AcademicSemesterModel = model<AcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
