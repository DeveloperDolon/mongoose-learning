import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import { NextFunction } from 'express';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['student', 'faculty', 'admin'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// pre save middleware / hook : will work on create() and save()
userSchema.pre('save', async function (next: NextFunction) {
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
userSchema.post('save', function (doc, next: NextFunction) {
  doc.password = '';
  next();
});

export const UserModel = model<TUser>('User', userSchema);
