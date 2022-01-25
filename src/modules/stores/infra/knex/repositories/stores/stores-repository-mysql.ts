import { Knex } from 'knex'
import { Store } from '../../../../../../shared/domain/store'
import { Builder } from '../../../../../../shared/protocols/repositories/builder'
import { IRepository } from '../../../../../../shared/protocols/repositories/repositories'
import { addDelete } from '../../utils/sql_builder/addDelete'
import { addInsert } from '../../utils/sql_builder/addInsert'
import { addUpdate } from '../../utils/sql_builder/addUpdate'
import { addWhere } from '../../utils/sql_builder/addWhere'
import { buildQuery } from '../../utils/sql_builder/buildQuery'

export class StoreRepository implements IRepository<Store> {
  private readonly collectionName = 'stores'
  private readonly db: Knex

  constructor ({ db }: any) {
    this.db = db
  }

  async find (params: Builder<Store>): Promise<Store[]> {
    const store = buildQuery(this.db(this.collectionName),
      addWhere('id', params?.where?.id),
      addWhere('name', params?.where?.name),
      addWhere('officialName', params?.where?.officialName),
      addWhere('socialName', params?.where?.socialName),
      addWhere('type', params?.where?.type),
      addWhere('description', params?.where?.description),
      addWhere('email', params?.where?.email),
      addWhere('phoneNumber', params?.where?.phoneNumber),
      addWhere('website', params?.where?.website),
      addWhere('openDate', params?.where?.openDate),
      addWhere('closeDate', params?.where?.closeDate),
      addWhere('keywords', params?.where?.keywords),
      addWhere('segment', params?.where?.segment),
      addWhere('cnpj', params?.where?.cnpj),
      addWhere('imageURL', params?.where?.imageURL),
      addWhere('createdAt', params?.where?.createdAt),
      addWhere('updatedAt', params?.where?.updatedAt)
    )

    console.log(store.toQuery())
    return await store
  }

  async update (entity: Store, params: Builder<Store>): Promise<void> {
    void await buildQuery(this.db(this.collectionName),
      addUpdate<Store, Store>(entity, params)
    )
  }

  async delete (params: Builder<Store>): Promise<void> {
    void await buildQuery(this.db(this.collectionName),
      addDelete<Store>(params)

    )
  }

  async save (entity: Store): Promise<void> {
    void await buildQuery(this.db(this.collectionName),
      addInsert<Store>(entity)
    )
  }
}
