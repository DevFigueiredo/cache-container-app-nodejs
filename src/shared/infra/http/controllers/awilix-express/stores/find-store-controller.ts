import { GET, route } from 'awilix-express'
import { Request, Response } from 'express'
import { Store } from '../../../../../domain/store'
import { CacheAPI } from '../../../../../helpers/cache-api'
import { HttpStatusHelper } from '../../../../../helpers/http-status-helper'
import { IUseCase } from '../../../../../protocols/useCases/use-cases'

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
    const store = await this.findStoresUseCase.execute({ params })
    return response.status(HttpStatusHelper.OK).json(store)
  }
}
