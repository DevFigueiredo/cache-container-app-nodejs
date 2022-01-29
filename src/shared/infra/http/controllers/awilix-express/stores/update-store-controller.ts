import { PATCH, route } from 'awilix-express'
import { Request, Response } from 'express'
import { Store } from '../../../../../domain/store'
import { HttpStatusHelper } from '../../../../../helpers/http-status-helper'
import { IUseCase } from '../../../../../protocols/useCases/use-cases'

@route('/stores')
export class CreateStoreController {
  private readonly updateStoresUseCase: IUseCase<Store, Partial<Store>, void>
  constructor ({ updateStoresUseCase }: any) {
    this.updateStoresUseCase = updateStoresUseCase
  }

  @route('/:id')
  @PATCH()
  async execute (request: Request, response: Response): Promise<Response<void>> {
    const entity = request.body
    await this.updateStoresUseCase.execute({ entity, params: { id: request.params.id } })
    return response.status(HttpStatusHelper.NoContent).end()
  }
}
