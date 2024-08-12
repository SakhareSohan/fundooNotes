/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import userService from '../services/user.service';

// const cookieParser = require('cookie-parser');

import { Request, Response, NextFunction } from 'express';

class UserController {
  public UserService = new userService();

  /**
   * Controller to create new user
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public register = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.UserService.register(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'User Registration'
      });
    } catch (error) {
      next(error);
    }
  };

  /**
  * Controller to get a single user
  * @param  {object} Request - request object
  * @param {object} Response - response object
  * @param {Function} NextFunction
  */
  public login = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.UserService.login(req.body.email, req.body.password);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: `User Login `
      });
    } catch (error) {
      next(error);
    }
  };

  /**
 * Controller to get a single user
 * @param  {object} Request - request object
 * @param {object} Response - response object
 * @param {Function} NextFunction
 */
  public getUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.UserService.getUser(req.body.id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'User Profile'
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * Controller to update a user
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
  public updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.UserService.updateUser(req.body.id, req.body);
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'User Update'
      });
    } catch (error) {
      next(error);
    }
  };

    /**
   * Controller to update a user
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
    public updateUserPassword = async (
      req: Request,
      res: Response,
      next: NextFunction
    ): Promise<any> => {
      try {
        const data = await this.UserService.updateUser(req.body.id, req.body);
        res.status(HttpStatus.ACCEPTED).json({
          code: HttpStatus.ACCEPTED,
          data: data,
          message: 'User Update'
        });
      } catch (error) {
        next(error);
      }
    };

        /**
   * Controller to update a user
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
        public deleteUser = async (
          req: Request,
          res: Response,
          next: NextFunction
        ): Promise<any> => {
          try {
            const data = await this.UserService.deleteUser(req.body.id);
            res.status(HttpStatus.ACCEPTED).json({
              code: HttpStatus.ACCEPTED,
              data: data,
              message: 'User Delete'
            });
          } catch (error) {
            next(error);
          }
        };
 
/**
   * Controller to update a user
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
public forgetUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const data = await this.UserService.forgetUser(req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Forgot Password'
    });
  } catch (error) {
    next(error);
  }
};

/**
   * Controller to update a user
   * @param  {object} Request - request object
   * @param {object} Response - response object
   * @param {Function} NextFunction
   */
public reset = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const data = await this.UserService.reset(req.body.id, req.body.password);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Password Reset'
    });
  } catch (error) {
    next(error);
  }
};

}

export default UserController;
