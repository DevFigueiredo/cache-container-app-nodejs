import { container } from '../../../../../container'
import { Store } from '../../../../../domain/store'

export class CreateStoreControllerGRPC {
  async execute (call, callback): Promise<any> {
    const entity = call.request as Store
    const id = await container.resolve('saveStoresUseCase').execute({ entity })
    callback(null, { id })
  }
}
