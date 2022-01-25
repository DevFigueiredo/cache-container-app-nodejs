import { DELETE, route } from 'awilix-express'
import { Request, Response } from 'express'
import { Store } from '../../shared/domain/store'
import { HttpStatusHelper } from '../../shared/helpers/http-status-helper'
import { IUseCase } from '../../shared/protocols/useCases/use-cases'

@route('/stores')
export class CreateStoreController {
  private readonly deleteStoresUseCase: IUseCase<undefined, Partial<Store>, void>
  constructor ({ deleteStoresUseCase }: any) {
    this.deleteStoresUseCase = deleteStoresUseCase
  }

  @DELETE()
  async execute (request: Request, response: Response): Promise<Response> {
    const params = request.query as any
    await this.deleteStoresUseCase.execute({ params, entity: undefined })
    return response.status(HttpStatusHelper.NoContent).end()
  }
}
