import { GET, route } from 'awilix-express'
import { Request, Response } from 'express'
import { container } from '../../shared/container'
import { Store } from '../../shared/domain/store'
import { HttpStatusHelper } from '../../shared/helpers/http-status-helper'
import { IRepositoryCache } from '../../shared/protocols/repositories/repositories'
import { IUseCase } from '../../shared/protocols/useCases/use-cases'

function cacheApplication (time: string): any {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalFunction = descriptor.value
    descriptor.value = async function (...args: any) {
      const repositoryCache: IRepositoryCache<string, Response> = container.resolve('redisRepository')
      const request: Request = args[0]
      const response: Response = args[1]
      const path = request.path
      const cache = await repositoryCache.find(path)
      await repositoryCache.save(path, undefined as any)

      if (!cache) {
        const responseNoCache = await originalFunction.apply(this, args)
        await repositoryCache.save(request.url, responseNoCache)
        return responseNoCache
      }
      return response.status(200).json(cache)
    }
  }
}
@route('/stores')
export class FindStoreController {
  private readonly findByIdStoresUseCase: IUseCase<undefined, Pick<Store, 'id'>, Store[]>
  constructor ({ findByIdStoresUseCase }: any) {
    this.findByIdStoresUseCase = findByIdStoresUseCase
  }

  @cacheApplication('600')
  @route('/:id')
  @GET()
  async execute (request: Request, response: Response): Promise<Response> {
    const store = await this.findByIdStoresUseCase.execute({ params: { id: request.params.id }, entity: undefined })
    response.locals = store
    return response.status(HttpStatusHelper.OK).json(store)
  }
}
