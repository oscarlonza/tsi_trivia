import { Router } from "express"
import { test } from '../controllers/main.controller.js'
import { auth } from './auth.route.js'

const router = Router()

router.get('/test', test)

router.use('/auth', auth)

export default router
