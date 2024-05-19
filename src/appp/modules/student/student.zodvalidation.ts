import { z } from 'zod';
// UserName schema
const userNameSchema = z.object({
  firstName: z
    .string()
    .max(20, { message: 'First name can not be more than 20 characters.' })
    .refine((value) => /^[A-Za-z]+$/.test(value), {
      message: 'First name must contain only alphabetic characters.',
    }),
  middleName: z.string().optional(),
  lastName: z.string().nonempty(),
});

// Guardian schema
const guardianSchema = z.object({
  fatherName: z.string().nonempty(),
  fatherOccupation: z.string().nonempty(),
  fatherContactNumber: z.string().nonempty(),
  motherName: z.string().nonempty(),
  motherOccupation: z.string().nonempty(),
  motherContactNumber: z.string().nonempty(),
});

// LocalGuardian schema
const localGuardianSchema = z.object({
  name: z.string().nonempty(),
  occupation: z.string().nonempty(),
  address: z.string().nonempty(),
  contactNo: z.string().nonempty(),
});

// Student schema
const studentZodSchema = z.object({
  id: z.string().nonempty(),
  name: userNameSchema,
  avatar: z.string().optional(),
  gender: z.enum(['male', 'female', 'other'], {
    errorMap: () => ({
      message: 'The gender field must be one of: male, female, or other.',
    }),
  }),
  dateOfBirth: z.string().optional(),
  email: z.string().email().nonempty(),
  contactNumber: z.string().nonempty(),
  emergencyContactNo: z.string().nonempty(),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O-', 'O+'])
    .optional(),
  presentAddress: z.string().nonempty(),
  permanentAddress: z.string().nonempty(),
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImage: z.string().optional(),
  isActive: z.enum(['active', 'inactive']).default('active'),
});

export default studentZodSchema;
