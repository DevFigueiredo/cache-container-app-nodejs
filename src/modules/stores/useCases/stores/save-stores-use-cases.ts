import { Store } from '../../../../shared/domain/store'
import { IRepository } from '../../../../shared/protocols/repositories/repositories'
import { IUseCase } from '../../../../shared/protocols/useCases/use-cases'

export class SaveStoresUseCase implements IUseCase<Store, void> {
  private readonly storeRepository: IRepository<Store>
  constructor ({ storeRepository }: any) {
    this.storeRepository = storeRepository
  }

  async execute (params: Store): Promise<void> {
    console.log(params)
    await this.storeRepository.save(params)
  }
}
