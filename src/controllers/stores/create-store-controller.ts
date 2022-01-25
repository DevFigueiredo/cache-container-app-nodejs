import { POST, route } from 'awilix-express'
import { Request, Response } from 'express'
import { Store } from '../../shared/domain/store'
import { HttpStatusHelper } from '../../shared/helpers/http-status-helper'
import { IUseCase } from '../../shared/protocols/useCases/use-cases'

@route('/stores')
export class CreateStoreController {
  private readonly saveStoresUseCase: IUseCase<Store, Partial<Store>, void>
  constructor ({ saveStoresUseCase }: any) {
    this.saveStoresUseCase = saveStoresUseCase
  }

  @POST()
  async execute (request: Request, response: Response): Promise<Response> {
    const entity = request.body as Store
    await this.saveStoresUseCase.execute({ entity })
    return response.status(HttpStatusHelper.Created).end()
  }
}
