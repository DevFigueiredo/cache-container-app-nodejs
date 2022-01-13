import express, { json } from 'express'
import cors from 'cors'

import { StoreRoutes } from './routes'
import { errorsMiddleware } from './middlewares/errors-middlewares'
const app = express()

app.use(json())
app.use(cors())

app.use(errorsMiddleware)

app.use('/stores', StoreRoutes)

export default app
