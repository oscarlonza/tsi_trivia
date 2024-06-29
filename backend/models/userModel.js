
import { Schema, model } from 'mongoose'

const user_schema = Schema({
    name: {
        type: String,
        required: true,
        min: 4,
        max: 16
    },
    nickname: {
        type: String,
        required: true,
        min: 4,
        max: 16
    },
    phone: {
        type: String,
        required: true,
        min: 10,
        max: 15
    },
    email: {
        type: String,
        min: 5,
        max: 256
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 256
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const User = model('user', user_schema)

export default User
