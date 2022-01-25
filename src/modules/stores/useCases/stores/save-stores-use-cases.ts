import { Store } from '../../../../shared/domain/store'
import { IRepository } from '../../../../shared/protocols/repositories/repositories'
import { IExecuteUseCase, IUseCase } from '../../../../shared/protocols/useCases/use-cases'

export class SaveStoresUseCase implements IUseCase<Store, undefined, void> {
  private readonly storeRepository: IRepository<Store>
  constructor ({ storeRepository }: any) {
    this.storeRepository = storeRepository
  }

  async execute ({ entity }: IExecuteUseCase<Store, undefined>): Promise<void> {
    await this.storeRepository.save(entity)
  }
}
