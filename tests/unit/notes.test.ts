import chai from 'chai';
import NoteService from '../../src/services/notes.service';
const expect = chai.expect;
import {  noteObj, updateNoteObj } from './user_note.js';

// Integration Testing
describe("Fundoo Notes app testing", () => {

    describe("Notes", () => {

        // Create Note
        it("Create Note", async () => {
            const data = await new NoteService().createNote(1, noteObj);
            expect(data).to.be.an('object');
        })

        // Fetch all Notes
        it("Fetch All Notes", async () => {
            const data = await new NoteService().getAllNotes(1);
            expect(data).to.be.an('array');
        })

        // Fetch Specific Note
        it("Fetch Specific Note", async () => {
            const data = await new NoteService().getNotes(1, 1);
            expect(data).to.be.an('object');
        })

        // Update a Specific Note
        it("Update a Specific Note", async () => {
            const data = await new NoteService().updateNote(1, updateNoteObj);
            expect(data).to.be.an('object');
        })

        // Archive Note
        it("Archive Note", async () => {
            const data = await new NoteService().archiveNote(1);
            expect(data).to.be.a('string');
        })

        // Trash Note
        it("Trash Note", async () => {
            const data = await new NoteService().trashNote(1);
            expect(data).to.be.a('string');
        })

        // Delete Note
        it("Delete Note", async () => {
            const data = await new NoteService().deleteNote(1);
            expect(data).to.be.a('string');
        })

    });

})



