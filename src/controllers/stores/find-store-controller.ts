import { GET, route } from 'awilix-express'
import { Request, Response } from 'express'
import { Store } from '../../shared/domain/store'
import { CacheAPI } from '../../shared/helpers/cacheAPI'
import { HttpStatusHelper } from '../../shared/helpers/http-status-helper'
import { IUseCase } from '../../shared/protocols/useCases/use-cases'

@route('/stores')
export class FindStoreController {
  private readonly findStoresUseCase: IUseCase<undefined, Partial<Store>, Store[]>
  constructor ({ findStoresUseCase }: any) {
    this.findStoresUseCase = findStoresUseCase
  }

  @CacheAPI(60)
  @GET()
  async execute (request: Request, response: Response): Promise<Response> {
    const params = request.query as unknown as Store
    const store = await this.findStoresUseCase.execute({ params, entity: undefined })
    return response.status(HttpStatusHelper.OK).json(store)
  }
}
