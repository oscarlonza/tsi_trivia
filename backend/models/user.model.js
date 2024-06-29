
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
        unique: true,
        min: 10,
        max: 15
    },
    email: {
        type: String,
        unique: true,
        min: 5,
        max: 56
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 15
    },
    date: {
        type: Date,
        default: Date.now
    }
})

user_schema.methods.toJSON = function() {
    const { __v, _id, password, ...user } = this.toObject()
    return user
}

const User = model('user', user_schema)

export default User
