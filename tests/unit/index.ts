import chai from 'chai';
import UserService from '../../src/services/user.service';
import NoteService from '../../src/services/notes.service';
const expect = chai.expect;

// Integration Testing
const userObj = {
    "firstName": "sohan6",
    "lastName": "sakhare6",
    "email": "sohan6@gmail.com",
    "mobileNo": 1235467890,
    "password": "qwertyuiop"
};

const updateUserObj = {
    "firstName": "sohan",
    "password": "sohansakhare"
};

const updateNoteObj = {
    "description": "JS",
    "color": "white"
};

const noteObj = {
    "title": "Hello World",
    "description": "",
    "color": "white"
}

// Integration Testing
describe("Fundoo Notes app testing", () => {

    describe("User", () => {

        // register a user
        it("registers a user", async () => {
            const data = await new UserService().register(userObj);
            expect(data).to.be.an('object');
        })

        //logins a user
        it("logins a user", async () => {
            const data = await new UserService().login(userObj.email, userObj.password);
            console.log(data);
            expect(data).to.be.a('string');
        })

        // Update A User
        it("Update user", async () => {
            const data = await new UserService().updateUser(7, updateUserObj);
            expect(data).to.be.an('object');
        })

        // Fetch User
        it("Get user", async () => {
            const data = await new UserService().getUser(7);
            expect(data).to.be.an('object');
        })

    });

    describe("Notes", () => {

        // Create Note
        it("Create Note", async () => {
            const data = await new NoteService().createNote(noteObj, 7);
            expect(data).to.be.an('object');
        })

        // Fetch all Notes
        it("Fetch All Notes", async () => {
            const data = await new NoteService().getAllNotes(1);
            expect(data).to.be.an('object');
        })

        // Fetch Specific Note
        it("Fetch Specific Note", async () => {
            const data = await new NoteService().getNotes(1);
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
            expect(data).to.be.an('object');
        })

        // Trash Note
        it("Trash Note", async () => {
            const data = await new NoteService().trashNote(1);
            expect(data).to.be.an('object');
        })

        // Delete Note
        it("Delete Note", async () => {
            const data = await new NoteService().deleteNote(1);
            expect(data).to.be.an('object');
        })

    });

})



