import { createContainer, asClass, asValue } from 'awilix'
import { CreateStoreController } from '../../controllers/stores/create-store-controller'
import { StoreRepository } from '../../modules/stores/infra/knex/repositories/stores/stores-repository-mysql'
import { RedisRepository } from '../../modules/stores/infra/redis/redis-repository'
import { FindCacheUseCases } from '../../modules/stores/useCases/cache/find-cache-use-cases'
import { SaveCacheUseCases } from '../../modules/stores/useCases/cache/save-cache-use-cases'
import { DeleteStoresUseCase } from '../../modules/stores/useCases/stores/delete-stores-use-cases'
import { FindByIdStoresUseCase } from '../../modules/stores/useCases/stores/find-by-id-stores-use-cases'
import { FindStoresUseCase } from '../../modules/stores/useCases/stores/find-stores-use-cases'
import { SaveStoresUseCase } from '../../modules/stores/useCases/stores/save-stores-use-cases'
import { UpdateStoresUseCase } from '../../modules/stores/useCases/stores/update-stores-use-cases'
import { UploadImage } from '../helpers/upload-image'
import { connectKnexDatabase } from '../infra/database/knex/index'
import { connectRedisDatabase } from '../infra/database/redis'
export const register = {
  // utils
  db: asValue(connectKnexDatabase),
  dbCache: asValue(connectRedisDatabase),

  // controllers
  createStoreController: asClass(CreateStoreController).singleton(),

  // use cases
  findStoresUseCase: asClass(FindStoresUseCase).singleton(),
  findByIdStoresUseCase: asClass(FindByIdStoresUseCase).singleton(),
  saveStoresUseCase: asClass(SaveStoresUseCase).singleton(),
  deleteStoresUseCase: asClass(DeleteStoresUseCase).singleton(),
  updateStoresUseCase: asClass(UpdateStoresUseCase).singleton(),
  saveCacheUseCases: asClass(SaveCacheUseCases).singleton(),
  findCacheUseCases: asClass(FindCacheUseCases).singleton(),

  // repositories
  storeRepository: asClass(StoreRepository).singleton(),
  redisRepository: asClass(RedisRepository).singleton(),

  // helpers
  uploadImage: asClass(UploadImage).singleton()

}

const container = createContainer().register(register)

export { container }
