import express, { IRouter } from 'express';
import userController from '../controllers/user.controller';
import userValidator from '../validators/user.validator';
import { userAuth, forgetUserAuth } from '../middlewares/auth.middleware';

class UserRoutes {
  private UserController = new userController();
  private router = express.Router();
  private UserValidator = new userValidator();

  constructor() {
    this.routes();
  }

  private routes = () => { 

    this.router.post('/signup', this.UserValidator.newUser, this.UserController.register);
    
    this.router.post('/login', this.UserValidator.login, this.UserController.login);

    this.router.get('/', userAuth,  this.UserController.getUser);

    this.router.put('/update/', userAuth, this.UserValidator.update, this.UserController.updateUser);

    this.router.put('/change', userAuth, this.UserController.updateUserPassword);

    /////////////////////////////////////////////////////////////

    this.router.post('/forget',  this.UserController.forgetUser);

    this.router.post('/reset', forgetUserAuth, this.UserController.reset);

    ////////////////////////////////////////////////////////////

  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default UserRoutes;
