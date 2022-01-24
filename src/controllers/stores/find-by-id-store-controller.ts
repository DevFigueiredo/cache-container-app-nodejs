import { GET, route } from 'awilix-express'
import { Request, Response } from 'express'
import { Store } from '../../shared/domain/store'
import { HttpStatusHelper } from '../../shared/helpers/http-status-helper'
import { IUseCase } from '../../shared/protocols/useCases/use-cases'

@route('/stores')
export class FindStoreController {
  private readonly findByIdStoresUseCase: IUseCase<Store, Store[]>
  constructor ({ findByIdStoresUseCase }: any) {
    this.findByIdStoresUseCase = findByIdStoresUseCase
  }

  @GET()
  async execute (request: Request, response: Response): Promise<Response> {
    const body = request.query as unknown as Store
    const store = await this.findByIdStoresUseCase.execute(body)
    return response.status(HttpStatusHelper.OK).json(store)
  }
}
