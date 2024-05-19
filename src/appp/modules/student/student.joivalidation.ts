import Joi from 'joi';

// creating a schema validation using joi
const userNameSchema = Joi.object({
  firstName: Joi.string()
    .max(20)
    .pattern(/^[A-Za-z]+$/)
    .required()
    .messages({
      'string.max': 'First name can not be more than 20 characters.',
      'string.pattern.base': '{#label} is not valid!',
    }),
  middleName: Joi.string().allow(null, ''),
  lastName: Joi.string().required(),
});

const guardianSchema = Joi.object({
  fatherName: Joi.string().required(),
  fatherOccupation: Joi.string().required(),
  fatherContactNumber: Joi.string().required(),
  motherName: Joi.string().required(),
  motherOccupation: Joi.string().required(),
  motherContactNumber: Joi.string().required(),
});

const localGuardianSchema = Joi.object({
  name: Joi.string().required(),
  occupation: Joi.string().required(),
  address: Joi.string().required(),
  contactNo: Joi.string().required(),
});

const studentSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameSchema.required().messages({
    'any.required': 'First name must be included.',
  }),
  avatar: Joi.string().uri().allow(null, ''),
  gender: Joi.string().valid('male', 'female', 'other').required().messages({
    'any.only':
      'The gender field must be one of the following: male, female, or other.',
  }),
  dateOfBirth: Joi.string().isoDate(),
  email: Joi.string().email().required(),
  contactNumber: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O-', 'O+')
    .messages({
      'any.only': '{#label} is not valid.',
    }),
  presentAddress: Joi.string().required(),
  permanentAddress: Joi.string().required(),
  guardian: guardianSchema.required(),
  localGuardian: localGuardianSchema.required(),
  profileImage: Joi.string().uri().allow(null, ''),
  isActive: Joi.string().valid('active', 'inactive').default('active'),
});

export default studentSchema;
