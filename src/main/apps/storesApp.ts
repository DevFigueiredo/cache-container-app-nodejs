/* eslint-disable @typescript-eslint/no-var-requires */
import express, { Express, json } from 'express'
import cors from 'cors'
import { loadControllers, scopePerRequest } from 'awilix-express'
import { errorsMiddleware } from '../../shared/infra/http/middlewares/errors-middlewares'
import { container } from '../../shared/container'
import { startServicesGRCP } from '../../shared/infra/http/controllers/grpc'

export const bootstrapExpress = (): Express => {
  const storesApp = express()

  storesApp.use(json())
  storesApp.use(cors())
  storesApp.use('/uploads/images', express.static('uploads/images'))

  storesApp.use(scopePerRequest(container))
  storesApp.use(loadControllers('./../../shared/infra/http/controllers/awilix-express/stores/*.ts', { cwd: __dirname }))
  storesApp.use(errorsMiddleware)
  return storesApp
}

export const bootstrapGRPC = (port: number, startFunction: any): void => {
  const grpc = require('@grpc/grpc-js')
  const server = new grpc.Server()
  startServicesGRCP(server)
  server.bindAsync(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure(), () => {
    server.start()
    if (startFunction) { startFunction() }
  })
}
