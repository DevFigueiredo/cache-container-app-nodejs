import { Store } from '../../../../shared/domain/store'
import { NotFoundError } from '../../../../shared/errors/not-found-error'
import { IRepository } from '../../../../shared/protocols/repositories/repositories'
import { IExecuteUseCase, IUseCase } from '../../../../shared/protocols/useCases/use-cases'

export class UpdateStoresUseCase implements IUseCase<Store, Store, void> {
  private readonly storeRepository: IRepository<Store>
  constructor ({ storeRepository }: any) {
    this.storeRepository = storeRepository
  }

  async execute ({ entity, params }: IExecuteUseCase<Store, Store>): Promise<void> {
    if (!params) {
      throw new NotFoundError('Params where to update is required')
    }
    await this.storeRepository.update(entity, { where: params })
  }
}
