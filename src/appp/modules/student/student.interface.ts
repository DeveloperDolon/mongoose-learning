import { Model } from 'mongoose';

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNumber: string;
  motherName: string;
  motherOccupation: string;
  motherContactNumber: string;
};

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type Student = {
  id: string;
  name: UserName;
  email: string;
  gender: 'Male' | 'Female';
  dateOfBirth?: string;
  contactNumber: string;
  avatar?: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O-' | 'O+';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImage?: string;
  isActive: 'active' | 'inactive';
};

// for creating static......>
export interface StudentAnoModel extends Model<Student> {
  isUserExistStudent(id: string): Promise<Student | null>;
}

// for creating instance
export type StudentMethod = {
  isUserExists(id: string): Promise<Student | null>;
};

export type StudentModelR = Model<
  Student,
  Record<string, never>,
  StudentMethod
>;
