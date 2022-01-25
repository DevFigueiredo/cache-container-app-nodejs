import { PATCH, route } from 'awilix-express'
import { Request, Response } from 'express'
import { Store } from '../../shared/domain/store'
import { HttpStatusHelper } from '../../shared/helpers/http-status-helper'
import { IUseCase } from '../../shared/protocols/useCases/use-cases'

@route('/stores')
export class CreateStoreController {
  private readonly updateStoresUseCase: IUseCase<Store, Partial<Store>, void>
  constructor ({ updateStoresUseCase }: any) {
    this.updateStoresUseCase = updateStoresUseCase
  }

  @PATCH()
  async execute (request: Request, response: Response): Promise<Response<void>> {
    const params = request.query
    const entity = request.body
    await this.updateStoresUseCase.execute({ entity, params })
    return response.status(HttpStatusHelper.NoContent).end()
  }
}
