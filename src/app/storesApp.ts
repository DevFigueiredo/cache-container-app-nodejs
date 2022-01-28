import express, { json } from 'express'
import cors from 'cors'

import { loadControllers, scopePerRequest } from 'awilix-express'
import { errorsMiddleware } from '../shared/infra/http/middlewares/errors-middlewares'
import { container } from '../shared/container'
const storesApp = express()

storesApp.use(json())
storesApp.use(cors())
storesApp.use('/uploads/images', express.static('uploads/images'))

storesApp.use(scopePerRequest(container))
storesApp.use(loadControllers('./../controllers/stores/*.ts', { cwd: __dirname }))
storesApp.use(errorsMiddleware)

export default storesApp
