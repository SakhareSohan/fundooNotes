import Joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';

class NoteValidator {
    public updateNote = (req, res, next) => {
        const schema = Joi.object({
            title: Joi.string().optional(),
            description: Joi.string().optional(),
            color: Joi.string().optional(),
            archive: Joi.boolean().optional(),
            trash: Joi.boolean().optional(),
            createdBy: Joi.number().optional(),
        });
        // const userId_schema = Joi.object({
        //     id: Joi.number().integer().required(),
        // });

        const header_schema = Joi.object({
            authorization: Joi.string().required(),
        }).unknown(true);

        const { error: bodyError } = schema.validate(req.body);
        if (bodyError) {
            return res.status(400).json({ error: bodyError.details[0].message });
        }
        // const { error: paramsError } = userId_schema.validate(req.params);
        // if (paramsError) {
        //     return res.status(400).json({ error: paramsError.details[0].message });
        // }
        const { error: headersError } = header_schema.validate(req.headers);
        if (headersError) {
            return res.status(400).json({ error: headersError.details[0].message });
        }
        next();
    };
    /*    
        this.router.post('/create', userAuth, this.NotesController.createNote);
    
        this.router.get('/allNotes',userAuth, this.NotesController.getAllNotes);
    
        this.router.get('/getNote/:id',userAuth, this.NotesController.getNote);
    
        this.router.post('/archive/:id', userAuth, this.NotesController.archiveNote);
    
        this.router.post('/trash/:id', userAuth, this.NotesController.trashNote);
    
        this.router.post('/delete/:id', userAuth, this.NotesController.deleteNote);
    */
}
export default NoteValidator;