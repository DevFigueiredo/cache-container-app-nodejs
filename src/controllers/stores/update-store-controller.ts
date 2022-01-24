import { POST, route } from 'awilix-express'
import { Request, Response } from 'express'
import { Store } from '../../shared/domain/store'
import { HttpStatusHelper } from '../../shared/helpers/http-status-helper'
import { IUseCase } from '../../shared/protocols/useCases/use-cases'

@route('/stores')
export class CreateStoreController {
  private readonly deleteStoresUseCase: IUseCase<Store, void>
  constructor ({ deleteStoresUseCase }: any) {
    this.deleteStoresUseCase = deleteStoresUseCase
  }

  @POST()
  async execute (request: Request, response: Response): Promise<Response<void>> {
    const params = request.query as unknown as Store
    await this.deleteStoresUseCase.execute(params)
    return response.status(HttpStatusHelper.NoContent).end()
  }
}
