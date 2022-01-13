import express, { json } from 'express'
import cors from 'cors'

import StoreRoutes from './app/routes/Stores'
const app = express()

app.use(json())
app.use(cors())

app.use('/stores', StoreRoutes)

export default app
