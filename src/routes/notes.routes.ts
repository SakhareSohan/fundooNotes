import express, { IRouter } from 'express';
import notesController from '../controllers/notes.controller';
import { userAuth } from '../middlewares/auth.middleware';
import NoteValidator from '../validators/notes.validator';

class NoteRoutes {
  private NotesController = new notesController();
  private router = express.Router();
  private noteValidator = new NoteValidator();

  constructor() {
    this.routes();
  }

  private routes = () => { 
    
    this.router.post('/update', this.noteValidator.updateNote, userAuth, this.NotesController.updateNote);
    
    this.router.post('/create', userAuth, this.NotesController.createNote);

    this.router.get('/allNotes',userAuth, this.NotesController.getAllNotes);

    this.router.get('/getNote/:id',userAuth, this.NotesController.getNote);

    this.router.post('/archive/:id', userAuth, this.NotesController.archiveNote);

    this.router.post('/trash/:id', userAuth, this.NotesController.trashNote);

    this.router.post('/delete/:id', userAuth, this.NotesController.deleteNote);

  };

  public getRoutes = (): IRouter => {
    return this.router;
  };
}

export default NoteRoutes;
