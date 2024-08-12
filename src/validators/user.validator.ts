import Joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';

class UserValidator {
  public newUser = (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      firstName: Joi.string().min(3).required(),
      lastName: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      password: Joi.string().alphanum().min(8).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
      mobileNo: Joi.number().min(10).required(),
      dob: Joi.date(),
      gender: Joi.string()
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    }
    next();
  };

  public login = (req: Request, res: Response, next: NextFunction): void => {
    const schema =  Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().alphanum().required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    }
    next();
  };

  public update = (req: Request, res: Response, next: NextFunction): void => {
    const schema = Joi.object({
      id: Joi.number(),
      firstName: Joi.string().min(3),
      lastName: Joi.string().min(3),
      email: Joi.string().email(),
      mobileNo: Joi.number().min(10),
      dob: Joi.date(),
      gender: Joi.string()
    });
    const { error } = schema.validate(req.body);
    if (error) {
      next(error);
    }
    next();
  };
}

export default UserValidator;
