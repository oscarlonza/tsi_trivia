import Joi from "joi"

const user_regex = Joi.object({
  name: Joi.string().min(4).max(16).required(),
  nickname: Joi.string().min(4).max(16).required(),
  phone: Joi.string().min(10).max(15).required(),
  email: Joi.string().min(5).max(56).email({ tlds: { allow: false } }),
  password: Joi.string().min(6).max(15).required(),
  confirm_password: Joi.ref('password')
})

const login_regex = Joi.object({
  nickname: Joi.string().min(4).max(16).required(),
  password: Joi.string().min(6).max(15).required()
})



export { user_regex, login_regex }