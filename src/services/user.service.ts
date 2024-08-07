import sequelize, { DataTypes } from '../config/database';
import user from '../models/user';
import utils from '../utils/user.util';
const bcrypt = require('bcrypt');

class UserService {
  private User = user(sequelize, DataTypes);
  private Utils = new utils();

  public register = async (body) => {
    const data = await this.User.create(body);
    return data;
  };

  public login = async (email, password) => {
    let data = await this.User.findOne({ where: { email: email } });
    if (data && await bcrypt.compare(password, data.password)) {
      const token = await this.Utils.login(data.dataValues.id, data.dataValues.firstName);
      return token;
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

  public updateUser = async (id, body) => {
    await this.User.update(body, {
      where: { id: id },
      individualHooks: true,
    });
    return body;
  };


////////////////////////////////////////////////////////////////

  public forgetUser = async (email) => {
    const data = await this.User.findOne({ where: email });
    const token = await this.Utils.forgetUser(data.email);
    return token;
  }

  public reset = async (token, password) => {
    const email = await this.Utils.forgetUserVerify(token);
    if (email) {
      const data = await this.User.update({password:password}, { where: { email : email }, individualHooks: true });
      return data;
    }
    return 'Invalid Token';
  }
}

export default UserService;


