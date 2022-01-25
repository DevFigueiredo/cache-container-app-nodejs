import { Store } from '../../../../shared/domain/store'
import { IRepository } from '../../../../shared/protocols/repositories/repositories'
import { IExecuteUseCase, IUseCase } from '../../../../shared/protocols/useCases/use-cases'

export class FindStoresUseCase implements IUseCase<undefined, Store, Store[]> {
  private readonly storeRepository: IRepository<Store>
  constructor ({ storeRepository }: any) {
    this.storeRepository = storeRepository
  }

  async execute ({ params }: IExecuteUseCase<undefined, Store>): Promise<Store[]> {
    const stores = await this.storeRepository.find({ where: params })
    return stores
  }
}
