import { GET, route } from 'awilix-express'
import { Request, Response } from 'express'
import { Store } from '../../shared/domain/store'
import { HttpStatusHelper } from '../../shared/helpers/http-status-helper'
import { IUseCase } from '../../shared/protocols/useCases/use-cases'

@route('/stores')
export class FindStoreController {
  private readonly findStoresUseCase: IUseCase<Store, void>
  constructor ({ findStoresUseCase }: any) {
    this.findStoresUseCase = findStoresUseCase
  }

  @GET()
  async execute (request: Request, response: Response): Promise<Response> {
    const body = request.body
    if (body instanceof Store) {
      console.log('oi')
    }
    await this.findStoresUseCase.execute(body)
    return response.status(HttpStatusHelper.Created).end()
  }
}
