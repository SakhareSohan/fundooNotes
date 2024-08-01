import { DateOnlyDataType } from "sequelize";

export type Gender = 'male' | 'female' | 'other';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  mobileNo: string;
  password: string;
  dob: DateOnlyDataType;
  gender: Gender;
  id?: string | number;
}
