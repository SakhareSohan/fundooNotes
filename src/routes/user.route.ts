import express, { IRouter } from 'express';
import userController from '../controllers/user.controller';
import userValidator from '../validators/user.validator';
import { userAuth, userAuthHeader } from '../middlewares/auth.middleware';

class UserRoutes {
  private UserController = new userController();
  private router = express.Router();
  private UserValidator = new userValidator();

  constructor() {
    this.routes();
  }

  private routes = () => { 

    this.router.post('/signup', this.UserController.register);
    
    this.router.post('/login', this.UserController.login);

    //route to get a single user by their id
    this.router.get('/cookies/:id', userAuth,  this.UserController.getUser);

    this.router.get('/header/:id', userAuthHeader, this.UserController.getUserHeader);

    //route to update a user by their id
    this.router.put('/:id', this.UserController.updateUser);

    //route to delete a user by their id
    this.router.delete('/:id', this.UserController.deleteUser);

    //route to get all users
    // this.router.get('', this.UserController.getAllUsers);
    // this.router.get('', this.UserController.getOneUser);
    // //route to create a new user
    // this.router.post(
    //   '',
    //   // this.UserValidator.newUser,
    //   this.UserController.newUser
    // );
  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default UserRoutes;
