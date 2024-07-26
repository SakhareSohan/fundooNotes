/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';
import { Model } from 'sequelize';
import { IUser } from '../interfaces/user.interface';
const bcrypt = require('bcrypt');
 
export default (sequelize, DataTypes) => {
  class User extends Model<IUser> implements IUser {
    public firstName!: string;
    public lastName!: string;
    public email!: string;
    public password!: string;
    public mobileNo!: string; 
    public dob!: Date;
    public gender;

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false, 
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false, 
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false, 
      },
      mobileNo: {
        type: DataTypes.STRING,
        unique: true, 
        allowNull: false, 
      },
      dob: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    },
    {
      sequelize,
      modelName: 'user',
      schema: 'fundoonotes',
    //   hooks:{
    //     beforeCreate: async (User, option) => {
    //       if (User.changed('password')) {
    //         User.password = await bcrypt.hash(User.password, 10);
    //     }
    //   }
    // }
  }
  );
  return User;
};
