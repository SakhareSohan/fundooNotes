/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpStatus from 'http-status-codes';
import notesService from '../services/notes.service';

// const cookieParser = require('cookie-parser');

import { Request, Response, NextFunction } from 'express';

class UserController {
 public NoteService = new notesService();

 /**
  * Controller to get a single user
  * @param  {object} Request - request object
  * @param {object} Response - response object
  * @param {Function} NextFunction
  */
 public createNote = async (
  req: Request,
  res: Response,
  next: NextFunction
 ): Promise<any> => {
  try {
   const data = await this.NoteService.createNote(req.body.id, req.body);
   res.status(HttpStatus.OK).json({
    code: HttpStatus.OK,
    data: data,
    message: 'Note Create'
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
 public updateNote = async (
  req: Request,
  res: Response,
  next: NextFunction
 ): Promise<any> => {
  try {
   const data = await this.NoteService.updateNote(req.body.id, req.body);
   res.status(HttpStatus.OK).json({
    code: HttpStatus.OK,
    data: data,
    message: 'Note Update'
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
 public getNote = async (
  req: Request,
  res: Response,
  next: NextFunction
 ): Promise<any> => {
  try {
   const data = await this.NoteService.getNotes(
    req.body.id,
    parseInt(req.params.id)
   );
   res.status(HttpStatus.OK).json({
    code: HttpStatus.OK,
    data: data,
    message: 'Note fetch'
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
 public getAllNotes = async (
  req: Request,
  res: Response,
  next: NextFunction
 ): Promise<any> => {
  try {
   const data = await this.NoteService.getAllNotes(req.body.id);
   res.status(HttpStatus.OK).json({
    code: HttpStatus.OK,
    data: data,
    message: 'All Notes'
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
 public archiveNote = async (
  req: Request,
  res: Response,
  next: NextFunction
 ): Promise<any> => {
  try {
   const data = await this.NoteService.archiveNote(parseInt(req.params.id));
   res.status(HttpStatus.OK).json({
    code: HttpStatus.OK,
    data: data,
    message: 'Note Archive'
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
 public trashNote = async (
  req: Request,
  res: Response,
  next: NextFunction
 ): Promise<any> => {
  try {
   const data = await this.NoteService.trashNote(parseInt(req.params.id));
   res.status(HttpStatus.OK).json({
    code: HttpStatus.OK,
    data: data,
    message: 'Note Trash'
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
 public deleteNote = async (
  req: Request,
  res: Response,
  next: NextFunction
 ): Promise<any> => {
  try {
   const data = await this.NoteService.deleteNote(parseInt(req.params.id));
   res.status(HttpStatus.OK).json({
    code: HttpStatus.OK,
    data: data,
    message: 'Note Delete'
   });
  } catch (error) {
   next(error);
  }
 };
}

export default UserController;
