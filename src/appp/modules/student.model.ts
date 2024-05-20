import { Schema, model } from 'mongoose';
import validator from 'validator';
import {
  Guardian,
  LocalGuardian,
  Student,
  StudentAnoModel,
  StudentMethod,
  StudentMethodForStatic,
  StudentModelForStatic,
  StudentModelR,
  UserName,
} from './student/student.interface';
import bcrypt from 'bcrypt';
import config from '../config';
import { NextFunction } from 'express';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
    maxlength: [20, 'First name can not be more then 20 characters.'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: `{VALUE} is not valid!`,
    },
  },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNumber: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNumber: { type: String, required: true },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: { type: String, required: true },
  address: { type: String, required: true },
  contactNo: { type: String, required: true },
});

const studentSchema = new Schema<
  Student,
  // StudentModelR,
  // StudentMethod,
  StudentAnoModel
>({
  id: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: [true, 'Password is required.'],
    unique: true,
    maxlength: [20, 'Password can not be more than 20 character.'],
  },
  name: {
    type: userNameSchema,
    required: [true, 'First name must need include.'],
  },
  avatar: { type: String },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message:
        'The gender field must need to be one thing male, female or other.',
    },
    required: true,
  },
  dateOfBirth: String,
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O-', 'O+'],
      message: `{VALUE} is not valid.`,
    },
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
  profileImage: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// pre save middleware / hook : will work on create() and save()
studentSchema.pre('save', async function (next: NextFunction) {
  // console.log(this, 'pre hook : we will save sate the data');

  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;

  // hashing password and save into db
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

// post save middleware / hook
studentSchema.post('save', function (doc, next: NextFunction) {
  doc.password = '';
  next();
});

// query middleware =======>
studentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });

  next();
});

//creating a custom static method
studentSchema.statics.isUserExistStudent = async function (id: string) {
  const existingUser = await StudentModel.findOne({ id });
  return existingUser;
};

// creating a custom instance method
// studentSchema.methods.studentSchema.methods.isUserExists = async function (
//   id: string,
// ) {
//   const existingUser = await StudentModel.findOne({ id: id });

//   return existingUser;
// };

const StudentModel = model<Student, StudentAnoModel>('Students', studentSchema);
export default StudentModel;
