import chai from 'chai';
import UserService from '../../src/services/user.service';
const expect = chai.expect;
import { superUser1, superUserLogin, updateSuperUser, updateSuperUserPass} from './user_note.js';

// Integration Testing
describe("Fundoo Notes app testing", () => {

    describe("User", () => {

        // register a user
        it("registers a user", async () => {
            const data = await new UserService().register(superUser1);
            expect(data).to.be.an('object');
        })

        //logins a user
        it("logins a user", async () => {
            const data = await new UserService().login(superUserLogin.email, superUserLogin.password);
            console.log(data);
            expect(data).to.be.a('string');
        })

        // Update A User
        it("Update user", async () => {
            const data = await new UserService().updateUser(2, updateSuperUser);
            expect(data).to.be.an('array');
        })

        // Fetch User
        it("Get user", async () => {
            const data = await new UserService().getUser(2);
            expect(data).to.be.an('object');
        })

////////////////////////////////////////////////////////////////////////////

        let token = '';

         // Forget A User
         it("Forget user", async () => {
            const data = await new UserService().forgetUser({"email": "super@gmail.com"});
            token = data;
            console.log(data);
            expect(data).to.be.an('string');
        })

        // Reset User
        it("Reset user", async () => {
            const data = await new UserService().reset(2, updateSuperUserPass.password);
            console.log(data);
            expect(data).to.be.an('array');
        })

    });

//////////////////////////////////////////////////////////////////////

})



