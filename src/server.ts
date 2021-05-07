import express from 'express'
import routes from './routes'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config({ path: __dirname + '/.env' })

const app = express()

app.use(routes)
app.use(cors())

app.listen(process.env.PORT)