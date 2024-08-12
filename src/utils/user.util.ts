import jwt from 'jsonwebtoken';

export default class Util {

    public async tokenGen(id, secreat) {
        const token = await jwt.sign({ id: id }, secreat, { expiresIn: '1h' });
        return token;
    }

    public async tokenVerify(body, secreat) {
        const data = await jwt.verify(body, secreat);
        return data;
    }

}

