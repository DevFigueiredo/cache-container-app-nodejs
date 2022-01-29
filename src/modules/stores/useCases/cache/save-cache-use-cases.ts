import { Cache } from '../../../../shared/domain/cache'
import { IRepositoryCache } from '../../../../shared/protocols/repositories/repositories'
import { IExecuteUseCase, IUseCase } from '../../../../shared/protocols/useCases/use-cases'

export class SaveCacheUseCases implements IUseCase<Pick<Cache, 'value'>, Pick<Cache, 'key'>, any> {
  private readonly redisRepository: IRepositoryCache<Cache['value'], Cache['key']>
  constructor ({ redisRepository }: any) {
    this.redisRepository = redisRepository
  }

  async execute ({ params, entity }: IExecuteUseCase<Pick<Cache, 'value'>, Pick<Cache, 'key'>>): Promise<void> {
    await this.redisRepository.save(params.key, entity.value)
  }
}
