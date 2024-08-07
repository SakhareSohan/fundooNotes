import jwt from 'jsonwebtoken';
import config from '../config/config.js'

export default class Util {

    public async login(id, username){
        const token = await jwt.sign({id:id, username:username}, config.development.secreat, { expiresIn: '1h' });
        return token;
    }

    public async verify(body){
        const data = await jwt.verify(body, config.development.secreat);
        return data;
    }

    public forgetUser = async (body) => {
        const token = await jwt.sign({email:body}, config.development.forget_secreat, { expiresIn: '1h' });
        return token;
    }

    public forgetUserVerify = async (token) => {
        const { email } = await jwt.verify(token, config.development.forget_secreat);
        return email;
    }

}
