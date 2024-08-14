import { DataTypes } from 'sequelize';
import config from '../config/config';
import sequelize from '../config/database';
import user from '../models/user';
import utils from '../utils/user.util';
const bcrypt = require('bcrypt');

class UserService {
 private User = user(sequelize, DataTypes);
 private Utils = new utils();

 public register = async (body) => {
  try {
   const data = await this.User.create(body);
   const message = await this.Utils.sendMessage(data);
   return data;
  } catch (err) {
   return err;
  }
 };

 public login = async (email, password) => {
  try {
   const data = await this.User.findOne({ where: { email: email } });
   if (data && (await bcrypt.compare(password, data.password))) {
    const token = await this.Utils.tokenGen(
     data.dataValues.id,
     config.development.secreat
    );
    return token;
   } else {
    return 'No User Was Found With Email';
   }
  } catch (err) {
   return err;
  }
 };

 public getUser = async (id) => {
  try {
   const data = await this.User.findByPk(id);
   return data.dataValues;
  } catch (error) {
   return error;
  }
 };

 public updateUser = async (id, body) => {
  try {
   const sanitizedBody = Object.keys(body).reduce((result, key) => {
    if (key !== 'id') {
     result[key] = body[key];
    }
    return result;
   }, {});
   const data = await this.User.update(sanitizedBody, {
    where: { id: id },
    individualHooks: true
   });
   return data;
  } catch (error) {
   return error;
  }
 };

 public deleteUser = async (id) => {
  try {
   const data = await this.User.destroy({
    where: { id: id }
   });
   return data;
  } catch (error) {
   return error;
  }
 };

 public forgetUser = async (email) => {
  try {
   const data = await this.User.findOne({ where: email });
   if (data) {
    const token = await this.Utils.tokenGen(
     data.dataValues.id,
     config.development.forget_secreat
    );
    return token;
   } else {
    return 'No User Found';
   }
  } catch (error) {
   return error;
  }
 };

 public reset = async (id, password) => {
  try {
   const data = await this.User.update(
    { password: password },
    { where: { id: id }, individualHooks: true }
   );
   return data;
  } catch (error) {
   return error;
  }
 };
}

export default UserService;
