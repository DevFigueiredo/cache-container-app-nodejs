import { Request, Response } from 'express'
import { Store } from '../../shared/domain/store'
import { HttpStatusHelper } from '../../shared/helpers/http-status-helper'
import { IUseCase } from '../../shared/protocols/useCases/useCases'

export class StoreController {
  private readonly saveStoresUseCase: IUseCase<Store>
  constructor ({ saveStoresUseCase }: any) {
    this.saveStoresUseCase = saveStoresUseCase
  }

  async execute (request: Request, response: Response): Promise<Response> {
    const body = request.body
    const store = await this.saveStoresUseCase.execute(body)
    return response.status(HttpStatusHelper.Created).json(store)
  }
}
