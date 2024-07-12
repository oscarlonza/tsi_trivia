import jwt from 'jsonwebtoken';
import { response } from '../services/utils/response.js';
import { constants } from '../services/utils/constants.js';

const {status, message} = constants.response

const jwt_validator = (req, res, next) => {
    const token = req.headers['authorization']

    if(!token) return res.status(status.unauthorized).json(response(false, message.jwt_token_required))

    try {
        jwt.verify(token, process.env.JWT_TOKEN)
        next()
    } catch (error) {
        console.log(error)
        res.status(status.unauthorized).json(response(false, message.jwt_token_invalid))    
    }
}

export { jwt_validator }