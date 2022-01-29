import { DELETE, route } from 'awilix-express'
import { Request, Response } from 'express'
import { Store } from '../../../../../domain/store'
import { HttpStatusHelper } from '../../../../../helpers/http-status-helper'
import { IUseCase } from '../../../../../protocols/useCases/use-cases'

@route('/stores')
export class CreateStoreController {
  private readonly deleteStoresUseCase: IUseCase<undefined, Partial<Store>, void>
  constructor ({ deleteStoresUseCase }: any) {
    this.deleteStoresUseCase = deleteStoresUseCase
  }

  @route('/:id')
  @DELETE()
  async execute (request: Request, response: Response): Promise<Response> {
    await this.deleteStoresUseCase.execute({ params: { id: request.params.id } })
    return response.status(HttpStatusHelper.NoContent).end()
  }
}
