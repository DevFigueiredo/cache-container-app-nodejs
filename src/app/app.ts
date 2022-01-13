import express, { json } from 'express'
import cors from 'cors'

import { scopePerRequest } from 'awilix-express'
import { StoreRoutes } from '../shared/infra/http/routes'
import { errorsMiddleware } from '../shared/infra/http/middlewares/errors-middlewares'
import { container } from '../shared/container'
const app = express()

app.use(json())
app.use(cors())

app.use(errorsMiddleware)
app.use(scopePerRequest(container))

app.use('/stores', StoreRoutes)

export default app
