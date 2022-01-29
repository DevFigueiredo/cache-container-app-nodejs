import { Cache } from '../../../../shared/domain/cache'
import { IRepositoryCache } from '../../../../shared/protocols/repositories/repositories'
import { IExecuteUseCase, IUseCase } from '../../../../shared/protocols/useCases/use-cases'

export class FindCacheUseCases implements IUseCase<Pick<Cache, 'value'>, Pick<Cache, 'key'>, any> {
  private readonly redisRepository: IRepositoryCache<Cache['value'], Cache['key']>
  constructor ({ redisRepository }: any) {
    this.redisRepository = redisRepository
  }

  async execute ({ params }: IExecuteUseCase<Pick<Cache, 'value'>, Pick<Cache, 'key'>>): Promise<any> {
    return await this.redisRepository.find(params.key)
  }
}
