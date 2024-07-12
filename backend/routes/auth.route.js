import { Router } from 'express'
import { login, register, profile } from '../controllers/auth.controller.js'
import { jwt_validator } from '../middleware/jwt.middleware.js'

const router = Router()

router.post('/register', register)

router.post('/login', login)

router.get('/profile', jwt_validator, profile)

export { router as auth }