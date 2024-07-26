export type Gender = 'male' | 'female' | 'other';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  mobileNo: string;
  password: string;
  dob: Date;
  gender: Gender;
  id?: string | number;
}
