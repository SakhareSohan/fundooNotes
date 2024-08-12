import sequelize, { DataTypes } from '../config/database';
import notes from '../models/notes';

class NotesServices {
  
  public Note = notes(sequelize, DataTypes);

  public getAllNotes = async (id): Promise<any[]> => {
    try {
      const data = await this.Note.findAll({ where: { createdBy: id } });
      return data;
    } catch (error) {
      return error;
    }
  }

  public getNotes = async (id: number, note_id: number): Promise<any> => {
    try {
      const data = await this.Note.findOne({ where: { id: note_id } });
      return data;
    } catch (error) {
      return error;
    }
  }

  public createNote = async (id: number, body: any): Promise<any> => {
    try {
      body.createdBy = id;
      const data = await this.Note.create(body);
      return data;
    } catch (error) {
     return error;
    }
  }

  public updateNote = async (id: number, body: any): Promise<any> => {
    try {
      const sanitizedBody = Object.keys(body).reduce((result, key) => {
        if (key !== 'id') {
            result[key] = body[key];
        }
        return result;
    }, {});
      const [rowsUpdated, [updatedNote]] = await this.Note.update(sanitizedBody, {
        where: { id: id },
        returning: true,
      });
      if (rowsUpdated === 0) {
        throw new Error(`No note found with ID ${id} to update`);
      }
      return updatedNote;
    } catch (error) {
      return error;
    }
  }

  public archiveNote = async (id: number): Promise<string> => {
    try {
      console.log('archive note');
      let rowsUpdated = 0
      const note = await this.Note.findOne({ where: { id } });
      if (!note) {
        return null;
      }
      if (note.archive === false) {
        console.log(note);
        [rowsUpdated] = await this.Note.update({ archive: true }, {
          where: { id },
        });
      } else {
        [rowsUpdated] = await this.Note.update({ archive: false }, {
          where: { id },
        });
      }
      return 'Note archived';
    } catch (error) {
      return error;
    }
  }

  public trashNote = async (id: number): Promise<string> => {
    try {
      console.log('trash note');
      let rowsUpdated = 0
      const note = await this.Note.findOne({ where: { id } });
      if (!note) {
        throw new Error(`No note found with ID ${id}`);
      }
      if (note.trash == false) {
        [rowsUpdated] = await this.Note.update({ trash: true }, {
          where: { id },
        });
      } else {
        [rowsUpdated] = await this.Note.update({ trash: false }, {
          where: { id },
        });
      }

      if (rowsUpdated === 0) {
        throw new Error(`No note found with ID ${id} to trash`);
      }
      return 'Note trashed';
    } catch (error) {
      return error;
    }
  }

  public deleteNote = async (id: number): Promise<string> => {
    try {
      const rowsDeleted = await this.Note.destroy({
        where: { id: id }
      });
      if(rowsDeleted){
        return 'Note deleted';
      } else {
        return 'Something went wrong'
      }
    } catch (error) {
      return error;
    }
  }
}

export default NotesServices;
