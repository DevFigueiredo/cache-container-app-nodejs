import { createContainer, asClass, asValue } from 'awilix'
import { CreateStoreController } from '../../controllers/stores/create-store-controller'
import { StoreRepository } from '../../modules/stores/infra/knex/repositories/stores/stores-repository-mysql'
import { DeleteStoresUseCase } from '../../modules/stores/useCases/stores/delete-stores-use-cases'
import { FindByIdStoresUseCase } from '../../modules/stores/useCases/stores/find-by-id-stores-use-cases'
import { FindStoresUseCase } from '../../modules/stores/useCases/stores/find-stores-use-cases'
import { SaveStoresUseCase } from '../../modules/stores/useCases/stores/save-stores-use-cases'
import { UpdateStoresUseCase } from '../../modules/stores/useCases/stores/update-stores-use-cases'
import { UploadImage } from '../helpers/upload-image'
import { connectDatabase } from '../infra/database/knex/connect-database'

export const register = {
  // utils
  db: asValue(connectDatabase),

  // controllers
  createStoreController: asClass(CreateStoreController).singleton(),

  // use cases
  findStoresUseCase: asClass(FindStoresUseCase).singleton(),
  findByIdStoresUseCase: asClass(FindByIdStoresUseCase).singleton(),
  saveStoresUseCase: asClass(SaveStoresUseCase).singleton(),
  deleteStoresUseCase: asClass(DeleteStoresUseCase).singleton(),
  updateStoresUseCase: asClass(UpdateStoresUseCase).singleton(),

  // repositories
  storeRepository: asClass(StoreRepository).singleton(),

  // helpers
  uploadImage: asClass(UploadImage).singleton()

}

const container = createContainer().register(register)

export { container }
