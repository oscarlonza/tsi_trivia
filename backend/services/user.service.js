import bcrypt from "bcrypt"
import { response } from "./utils/response.js"
import User from "../models/user.model.js"
import { user_validator, login_validator } from "./validators/auth.validator.js"
import jwt from "jsonwebtoken"

const register = async user_request => {

    const { error } = user_validator.validate(user_request)

    if (error) return response(false, error.details[0].message)

    if (await User.findOne({ nickname: user_request.nickname }))
        return response(false, 'Already exists a user with this nickname')
    if (user_request.email && await User.findOne({ email: user_request.email }))
        return response(false, 'Already exists a user with this email')
    if (await User.findOne({ phone: user_request.phone }))
        return response(false, 'Already exists a user with this phone')

    delete user_request.confirm_password

    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(user_request.password, salt)

    user_request.password = hash

    const user = new User(user_request)

    const new_user = await user.save()

    return response(true, 'User registered', new_user.toJSON());
}

const login = async login_request => {
    const { error } = login_validator.validate(login_request)

    if (error) return response(false, error.details[0].message)

    const user_db = await User.findOne({ nickname: login_request.nickname })

    const error_message = 'User or password incorrect';

    if (!user_db) return response(false, error_message)

    const valid_password = await bcrypt.compare(login_request.password, user_db.password)

    if (!valid_password) return response(false, error_message)

    const payload = {
        id: user_db._id,
        name: user_db.name,
        phone: user_db.phone,
    }

    const token = jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: '1h' })

    return response(true, 'User logged in', { token });
}

export { register, login }