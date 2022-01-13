import { Store } from '../../../../../../shared/domain/store'
import { IRepository } from '../../../../../../shared/protocols/repositories/repositories'

export class StoreRepository implements IRepository<Store> {
  async find (request: Request, response: Response): Promise<Store> {
    return {} as any
  }

  async update (request: Request, response: Response): Promise<void> {

  }

  async delete (request: Request, response: Response): Promise<void> {

  }

  async save (request: Request, response: Response): Promise<void> {

  }
}
