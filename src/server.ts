import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routes from './routes'

dotenv.config()

const app = express()

app.use(routes)
app.use(cors())

app.listen(process.env.PORT || 3333)
