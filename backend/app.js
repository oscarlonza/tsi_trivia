import express from 'express'
import dbConnection from './database/db.js'
import mainRouter from './routes/main.route.js'
import { not_found } from './controllers/main.controller.js'
import cors from 'cors'

const port = process.env.PORT || 3000

const app = express()
app.use(express.json())

await dbConnection()

app.use(cors())
app.use('/api', mainRouter)

app.all('*', not_found);

app.listen(port, () => console.log(`Server is running on port ${port}`))
