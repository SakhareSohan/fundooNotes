const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const config = require('../config/config');

import sequelize, { DataTypes } from '../config/database';

import user from '../models/user';

// import user from '../models/user';
// import notes from '../models/notes'; 


class UserService {

  private User = user(sequelize, DataTypes);

  private secreat_key = config.development.secreat

  public register = async (body) => {
    const data = await this.User.create(body);
    return data;
  };

  public login = async (email, password) => {
    let data = await this.User.findOne({ where: { email: email } });
    if (data && await bcrypt.compare(password, data.password)) {
      let user = {
        id: data.dataValues.id,
        name: data.dataValues.firstName
      }
      const tokken = await jwt.sign(user, this.secreat_key, { expiresIn: '1h' });
      return tokken;
    } else {
      return 'Inavlid Credentials';
    }
  };

  public getUser = async (id) => {
    try {
      const data = await this.User.findByPk(id);
      return data.dataValues;
    }
    catch (error) {
      throw new Error('User not found');
    }

  };

  // public getUserHeader = async (id, token) => {
  //   try {
  //     const decoded = jwt.verify(token, this.secreat_key);
  //     if (!decoded) {
  //       throw new Error('Invalid token');
  //     };
  //     const data = await this.User.findByPk(id);
  //     if (data.dataValues.id == decoded.id){
  //       return data;
  //     };
  //     throw new Error('Login Again By Cleaning Cookies');
  //   } catch (error) {
  //     throw new Error('Token verification failed');
  //   };
  // };

  // //get all users
  // public getAllUsers = async (): Promise<IUser[]> => {
  //   const data = await this.User.findAll();
  //   return data;
  // };



  //update a user
  public updateUser = async (id, body) => {
    await this.User.update(body, {
      where: { id: id }, 
      individualHooks: true,
    });
    return body;
  };

  // //delete a user
  // public deleteUser = async (id) => {
  //   await this.User.destroy({ where: { id: id } });
  //   return '';
  // };
}

export default UserService;


