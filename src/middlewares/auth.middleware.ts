/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';


import Util from '../utils/user.util';
const Utils = new Util();

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const userAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    let bearerToken = req.header('Authorization');
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    bearerToken = bearerToken.split(' ')[1];

    const {id, name} : any = await Utils.verify(bearerToken);
    (req as any ).id = id;
    (req as any ).name = name;
    next();
  } catch (error) {
    next(error);
  }
};

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const forgetUserAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    let bearerToken = req.header('Authorization');
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
    console.log("middleware: forgetUserAuth")
    req.body.email = bearerToken.split(' ')[1];

    next();
  } catch (error) {
    next(error);
  }
};

// /**
//  * Middleware to authenticate if user has a valid Authorization token
//  * Authorization: Bearer <token>
//  *
//  * @param {Object} req
//  * @param {Object} res
//  * @param {Function} next
//  */
// export const userAuthHeader = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): Promise<void> => {
//   try {
//     let bearerToken = req.cookies.jwt;
//     if (!bearerToken)
//       throw {
//         code: HttpStatus.BAD_REQUEST,
//         message: 'Authorization token is required'
//       };

//     const decoded : any = await jwt.verify(bearerToken, config.development.secreat);

//     console.log(decoded.id, req.params.id);
    
//     if (decoded.id == req.params.id){
//       res.locals.user = decoded;
//       res.locals.token = bearerToken;
//       next();
//     } else {
//       throw {
//         code: HttpStatus.UNAUTHORIZED,
//         message: 'Unauthorized'
//       };
//     }
    
//   } catch (error) {
//     next(error);
//   }
// };
