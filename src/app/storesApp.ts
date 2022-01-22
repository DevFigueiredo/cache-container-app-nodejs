import express, { json } from 'express'
import cors from 'cors'

import { scopePerRequest } from 'awilix-express'
import { StoreRoutes } from '../shared/infra/http/routes'
import { errorsMiddleware } from '../shared/infra/http/middlewares/errors-middlewares'
import { container } from '../shared/container'
const storesApp = express()

storesApp.use(json())
storesApp.use(cors())

storesApp.use(errorsMiddleware)
storesApp.use(scopePerRequest(container))

storesApp.use('/stores', StoreRoutes)

export default storesApp
