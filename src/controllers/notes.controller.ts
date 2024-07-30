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
  public updateNote = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      const data = await this.NoteService.updateNote(parseInt(req.params.id), req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Note Updated Successfully'
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
  public createNote = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    try {
      console.log((req as any).id);
      const data = await this.NoteService.createNote(req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Note Created Successfully'
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
      const data = await this.NoteService.getNotes(parseInt(req.params.id));
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Note fetched successfully'
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
      const data = await this.NoteService.getAllNotes((req as any).id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Notes fetched successfully'
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
        message: 'Note Archive successfully'
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
        message: 'Note Trashed successfully'
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
        message: 'Note Deleted successfully'
      });
    } catch (error) {
      next(error);
    }
  };

}

export default UserController;
