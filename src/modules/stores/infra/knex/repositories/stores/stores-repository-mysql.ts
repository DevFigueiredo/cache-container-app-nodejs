import { Knex } from 'knex'
import { Store } from '../../../../../../shared/domain/store'
import { IRepository } from '../../../../../../shared/protocols/repositories/repositories'

export class StoreRepository implements IRepository<Store> {
  private readonly collectionName = 'stores'
  private readonly db: Knex

  constructor ({ db }: any) {
    this.db = db
  }

  async findById (params: Store): Promise<Store | undefined> {
    const store = await this.db(this.collectionName).select<Store[]>().first()
    return store
  }

  async find (params: Store): Promise<Store[]> {
    const store = await this.db(this.collectionName).select<Store[]>()
    return store
  }

  async update (params: Store): Promise<void> {
    await this.db(this.collectionName).update<Store>(params).where({ id: params.id })
  }

  async delete (params: Store): Promise<void> {
    await this.db(this.collectionName).delete().where({ id: params.id })
  }

  async save (params: Store): Promise<void> {

  }
}
