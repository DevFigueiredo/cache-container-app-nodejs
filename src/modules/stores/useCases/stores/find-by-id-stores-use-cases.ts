import { Store } from '../../../../shared/domain/store'
import { NotFoundError } from '../../../../shared/errors/not-found-error'
import { IRepository, IRepositoryCache } from '../../../../shared/protocols/repositories/repositories'
import { IExecuteUseCase, IUseCase } from '../../../../shared/protocols/useCases/use-cases'

export class FindByIdStoresUseCase implements IUseCase<undefined, Store, Store> {
  private readonly storeRepository: IRepository<Store>
  private readonly storeCacheRepository: IRepositoryCache<string, Store>

  constructor ({ storeRepository, storeCacheRepository }: any) {
    this.storeCacheRepository = storeCacheRepository
    this.storeRepository = storeRepository
  }

  async execute ({ params }: IExecuteUseCase<undefined, Store>): Promise<Store> {
    if (!params?.id) { throw new NotFoundError('id not found in params') }
    const storeCached = await this.storeCacheRepository.find(params.id)
    if (storeCached) return storeCached
    const [stores] = await this.storeRepository.find({ where: { id: params.id } })
    if (!stores) { throw new NotFoundError('Store not found') }
    return stores
  }
}
