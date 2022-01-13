import { createContainer, asClass, InjectionMode } from 'awilix'
import { StoreRepository } from '../../modules/stores/infra/knex/repositories/stores/stores-repository-mysql'
import { DeleteStoresUseCase } from '../../modules/stores/useCases/stores/delete-stores-use-cases'
import { FindStoresUseCase } from '../../modules/stores/useCases/stores/find-stores-use-cases'
import { SaveStoresUseCase } from '../../modules/stores/useCases/stores/save-stores-use-cases'
import { UpdateStoresUseCase } from '../../modules/stores/useCases/stores/update-stores-use-cases'

const container = createContainer({
  injectionMode: InjectionMode.PROXY
})

container.register({
  findStoresUseCase: asClass(FindStoresUseCase),
  saveStoresUseCase: asClass(SaveStoresUseCase),
  deleteStoresUseCase: asClass(DeleteStoresUseCase),
  updateStoresUseCase: asClass(UpdateStoresUseCase),
  storeRepository: asClass(StoreRepository)
})
export { container }
