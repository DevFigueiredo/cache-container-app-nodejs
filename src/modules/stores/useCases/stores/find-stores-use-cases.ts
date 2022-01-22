import { Store } from '../../../../shared/domain/store'
import { IRepository } from '../../../../shared/protocols/repositories/repositories'
import { IUseCase } from '../../../../shared/protocols/useCases/useCases'

export class FindStoresUseCase implements IUseCase<Store, Store[]> {
  private readonly storeRepository: IRepository<Store>
  constructor ({ storeRepository }: any) {
    this.storeRepository = storeRepository
  }

  async execute (params?: Store): Promise<Store[]> {
    const stores = await this.storeRepository.find({ where: params as Store })
    return stores
  }
}
