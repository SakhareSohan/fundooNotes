// import sequelize, { DataTypes } from '../config/database';
// import notes from '../models/notes';

// class NotesServices {
//   private Notes = notes(sequelize, DataTypes);

//   public getAllNotes = async (): Promise<any[]> => {
//     try {
//       const data = await this.Notes.findAll();
//       return data;
//     } catch (error) {
//       throw new Error(`Error fetching all notes: ${error.message}`);
//     }
//   }

//   public getNotes = async (id: number): Promise<any> => {
//     try {
//       const data = await this.Notes.findOne({ where: { id } });
//       return data;
//     } catch (error) {
//       throw new Error(`Error fetching note with ID ${id}: ${error.message}`);
//     }
//   }

//   public createNote = async (body: any): Promise<any> => {
//     try {
//       const data = await this.Notes.create(body);
//       return data;
//     } catch (error) {
//       throw new Error(`Error creating note: ${error.message}`);
//     }
//   }

//   public updateNote = async (id: number, body: any): Promise<any> => {
//     try {
//       const [rowsUpdated, [updatedNote]] = await this.Notes.update(body, {
//         where: { id },
//         returning: true,
//       });
//       if (rowsUpdated === 0) {
//         throw new Error(`No note found with ID ${id} to update`);
//       }
//       return updatedNote;
//     } catch (error) {
//       throw new Error(`Error updating note with ID ${id}: ${error.message}`);
//     }
//   }

//   public archiveNote = async (id: number, archive: boolean): Promise<string> => {
//     try {
//       const [rowsUpdated] = await this.Notes.update({ archive }, {
//         where: { id },
//       });
//       if (rowsUpdated === 0) {
//         throw new Error(`No note found with ID ${id} to archive`);
//       }
//       return 'Note archived';
//     } catch (error) {
//       throw new Error(`Error archiving note with ID ${id}: ${error.message}`);
//     }
//   }

//   public trashNote = async (id: number, trash: boolean): Promise<string> => {
//     try {
//       const [rowsUpdated] = await this.Notes.update({ trash }, {
//         where: { id },
//       });
//       if (rowsUpdated === 0) {
//         throw new Error(`No note found with ID ${id} to move to trash`);
//       }
//       return 'Note moved to trash';
//     } catch (error) {
//       throw new Error(`Error moving note with ID ${id} to trash: ${error.message}`);
//     }
//   }

//   public deleteNote = async (id: number): Promise<string> => {
//     try {
//       const rowsDeleted = await this.Notes.destroy({
//         where: { id },
//       });
//       if (rowsDeleted === 0) {
//         throw new Error(`No note found with ID ${id} to delete`);
//       }
//       return 'Note deleted';
//     } catch (error) {
//       throw new Error(`Error deleting note with ID ${id}: ${error.message}`);
//     }
//   }
// }

// export default NotesServices;
