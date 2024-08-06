import { expect } from 'chai';
import UserService from '../../src/services/user.service';

describe('User', () => {
  describe('Get Users', () => {
    it('should return empty array', async () => {
      const result = await new UserService().getUser(1);
      expect(result).to.be.an('array');
    });
  }); 
});
