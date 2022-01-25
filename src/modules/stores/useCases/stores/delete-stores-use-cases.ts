import { Store } from '../../../../shared/domain/store'
import { IRepository } from '../../../../shared/protocols/repositories/repositories'
import { IExecuteUseCase, IUseCase } from '../../../../shared/protocols/useCases/use-cases'

export class DeleteStoresUseCase implements IUseCase<undefined, Store, void> {
  private readonly storeRepository: IRepository<Store>
  constructor ({ storeRepository }: any) {
    this.storeRepository = storeRepository
  }

  async execute ({ params }: IExecuteUseCase<undefined, Store>): Promise<void> {
    await this.storeRepository.delete({ where: { id: params?.id } })
  }
}
