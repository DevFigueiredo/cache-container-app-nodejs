import { Store } from '../../../../shared/domain/store'
import { IUseCase } from '../../../../shared/protocols/useCases/useCases'

export class FindStoresUseCase implements IUseCase<Store> {
  async execute (params?: Store): Promise<Store> {
    return {} as any
  }
}
