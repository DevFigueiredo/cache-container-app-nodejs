import { GET, route } from 'awilix-express'
import { Request, Response } from 'express'
import { Store } from '../../shared/domain/store'
import { CacheAPI } from '../../shared/helpers/cache-api'
import { HttpStatusHelper } from '../../shared/helpers/http-status-helper'
import { IUseCase } from '../../shared/protocols/useCases/use-cases'

@route('/stores')
export class FindStoreController {
  private readonly findByIdStoresUseCase: IUseCase<undefined, Pick<Store, 'id'>, Store[]>
  constructor ({ findByIdStoresUseCase }: any) {
    this.findByIdStoresUseCase = findByIdStoresUseCase
  }

  @CacheAPI(60)
  @route('/:id')
  @GET()
  async execute (request: Request, response: Response): Promise<Response> {
    const store = await this.findByIdStoresUseCase.execute({ params: { id: request.params.id } })
    console.log('controller')
    return response.status(HttpStatusHelper.OK).json(store)
  }
}
