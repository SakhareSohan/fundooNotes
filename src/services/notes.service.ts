import sequelize, { DataTypes } from '../config/database';
import notes from '../models/notes';

class NotesServices {
  
  public Note = notes(sequelize, DataTypes);

  public getAllNotes = async (id): Promise<any[]> => {
    try {
      console.log('Getting all notes');
      const data = await this.Note.findAll({ where: { createdBy: id } });
      return data;
    } catch (error) {
      throw new Error(`Error fetching all notes: ${error.message}`);
    }
  }

  public getNotes = async (id: number): Promise<any> => {
    try {
      console.log('inside note services, Getting notes');
      const data = await this.Note.findOne({ where: { id } });
      return data;
    } catch (error) {
      throw new Error(`Error fetching note with ID ${id}: ${error.message}`);
    }
  }

  public createNote = async (body: any, id: number): Promise<any> => {
    try {
      console.log('inside note services create notes');
      body.createdBy = id;
      const data = await this.Note.create(body);
      return data;
    } catch (error) {
      throw new Error(`Error creating note: ${error.message}`);
    }
  }

  public updateNote = async (id: number, body: any): Promise<any> => {
    try {
      console.log('update notes');
      const [rowsUpdated, [updatedNote]] = await this.Note.update(body, {
        where: { id },
        returning: true,
      });
      if (rowsUpdated === 0) {
        throw new Error(`No note found with ID ${id} to update`);
      }
      return updatedNote;
    } catch (error) {
      throw new Error(`Error updating note with ID ${id}: ${error.message}`);
    }
  }

  public archiveNote = async (id: number): Promise<string> => {
    try {
      console.log('archive note');
      let rowsUpdated = 0
      const note = await this.Note.findOne({ where: { id } });
      if (!note) {
        throw new Error(`No note found with ID ${id}`);
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

      if (rowsUpdated === 0) {
        throw new Error(`No note found with ID ${id} to archive`);
      }
      return 'Note archived';
    } catch (error) {
      throw new Error(`Error archiving note with ID ${id}: ${error.message}`);
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
      throw new Error(`Error trash note with ID ${id}: ${error.message}`);
    }
  }

  public deleteNote = async (id: number): Promise<string> => {
    try {
      const rowsDeleted = await this.Note.destroy({
        where: { id },
      });
      if (rowsDeleted === 0) {
        throw new Error(`No note found with ID ${id} to delete`);
      }
      return 'Note deleted';
    } catch (error) {
      throw new Error(`Error deleting note with ID ${id}: ${error.message}`);
    }
  }
}

export default NotesServices;
