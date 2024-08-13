import { expect } from 'chai';
import request from 'supertest';

import app from '../../src/index';
import {
 superUser,
 superUserLogin,
 updateSuperUser,
 updateSuperUserPass
} from './user_note';

let token = '';
let forgetToken = '';

describe('Fundoo Notes Integration testing', () => {
 describe('User APIs Test', () => {
  ////////////////////////////////////////////////////////////////////////////

  describe('Register A User', () => {
   it('Registration Of User', (done) => {
    request(app.getApp())
     .post('/api/v1/users/')
     .send(superUser)
     .end((err, res) => {
      console.log(res.body);
      expect(res.statusCode).to.be.equal(201);
      done();
     });
   });
  });

  describe('Login A User', () => {
   it('Login Of User', (done) => {
    request(app.getApp())
     .post('/api/v1/users/login/')
     .send({ email: superUserLogin.email, password: superUserLogin.password })
     .end((err, res) => {
      console.log(res.body);
      token = 'bearer ' + res.body.data;
      expect(res.statusCode).to.be.equal(200);
      done();
     });
   });
  });

  describe('User Profile', () => {
   it('Detail of User', (done) => {
    request(app.getApp())
     .get('/api/v1/users/')
     .set('Authorization', token)
     .end((err, res) => {
      console.log(res.body);
      expect(res.statusCode).to.be.equal(200);
      done();
     });
   });
  });

  describe('User Profile Updating', () => {
   it('Updating of User', (done) => {
    request(app.getApp())
     .put('/api/v1/users/')
     .set('Authorization', token)
     .send(updateSuperUser)
     .end((err, res) => {
      console.log(res.body);
      expect(res.statusCode).to.be.equal(202);
      done();
     });
   });
  });

  describe('User Profile Changing', () => {
   it('Change of User', (done) => {
    request(app.getApp())
     .put('/api/v1/users/password/')
     .set('Authorization', token)
     .send(updateSuperUserPass.password)
     .end((err, res) => {
      console.log(res.body);
      expect(res.statusCode).to.be.equal(202);
      done();
     });
   });
  });

  describe('User Profile Password Changing', () => {
   it('Password Change of User', (done) => {
    request(app.getApp())
     .delete('/api/v1/users/')
     .set('Authorization', token)
     .end((err, res) => {
      console.log(res.body);
      expect(res.statusCode).to.be.equal(202);
      done();
     });
   });
  });

  /////////////////////////////////////////////////////////////////////////

  describe('User Profile Creation', () => {
   before((done) => {
    request(app.getApp())
     .post('/api/v1/users/')
     .send(superUser)
     .end((err, res) => {
      console.log(res.body);
      expect(res.statusCode).to.be.equal(201);
      done();
     });
   });
   it('Request for Password Change of User', (done) => {
    request(app.getApp())
     .post('/api/v1/users/forget/')
     .send({ email: 'super@gmail.com' })
     .end((err, res) => {
      console.log(res.body);
      forgetToken = 'bearer ' + res.body.data;
      console.log(
       '...........................................................',
       forgetToken
      );
      expect(res.statusCode).to.be.equal(202);
      done();
     });
   });
  });

  describe('User Profile Password Changing', () => {
   it('Password Change of User', (done) => {
    request(app.getApp())
     .post('/api/v1/users/forget/reset/')
     .set('Authorization', forgetToken)
     .send({ password: 'newpassword' })
     .end((err, res) => {
      console.log(res.body);
      expect(res.statusCode).to.be.equal(202);
      done();
     });
   });
  });
 });
});
