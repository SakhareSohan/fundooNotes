import express, { IRouter } from 'express';
import userController from '../controllers/user.controller';
import userValidator from '../validators/user.validator';
import { userAuth, forgotUser } from '../middlewares/auth.middleware';

class UserRoutes {
  private UserController = new userController();
  private router = express.Router();
  private UserValidator = new userValidator();

  constructor() {
    this.routes();
  } 

  private routes = () => { 

    this.router.get('/', userAuth,  this.UserController.getUser);

    this.router.post('/', this.UserValidator.newUser, this.UserController.register);
    
    this.router.post('/login', this.UserValidator.login, this.UserController.login);

    this.router.put('/', userAuth, this.UserValidator.update, this.UserController.updateUser);

    this.router.put('/password', userAuth, this.UserController.updateUserPassword);

    this.router.delete('/', userAuth, this.UserController.deleteUser);

    /////////////////////////////////////////////////////////////

    this.router.post('/forget',  this.UserController.forgetUser);

    this.router.post('/forget/reset', forgotUser, this.UserController.reset);

    ////////////////////////////////////////////////////////////

  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default UserRoutes;
