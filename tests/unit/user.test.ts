import { expect } from 'chai';
import UserService from '../../src/services/user.service';

const userObj = {
  "firstName": "sohan",
  "lastName": "sakhare",
  "email": "sohan@gmail.com",
  "mobileNo": 1234567890,
  "password": "qwertyuiop"
};

describe('User', () => {
  describe('Get Users', () => {
    it('should return empty array', async () => {
      const result = await new UserService().register(userObj);
      expect(result).to.be.an('object');
    });
  }); 
});
