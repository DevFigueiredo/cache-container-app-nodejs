/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path'
import { container } from '../../../../container'
const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')

export const startServicesGRCP = (server: any): any => {
  // stores
  const createStoreControllerGRPC = container.resolve('createStoreControllerGRPC')
  const storeServicePackageDefined = makeLoadSyncPackageGRPC('/stores/protos/create-store', 'store')
  server.addService(storeServicePackageDefined.CreateStoreService.service, { execute: createStoreControllerGRPC.execute })
}

function makeLoadSyncPackageGRPC (protoPath: string, protoPackage: string): any {
  const PROTO_PATH = path.resolve(__dirname, `./${protoPath}.proto`)
  const storePackage = protoLoader.loadSync(
    PROTO_PATH,
    {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true
    })
  const storeServicePackageDefined = grpc.loadPackageDefinition(storePackage)[protoPackage]
  return storeServicePackageDefined
}
