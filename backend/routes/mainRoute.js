import { Router } from "express"
import { test } from '../controllers/mainController.js'

const router = Router()

router.get('/', test)


export default router
