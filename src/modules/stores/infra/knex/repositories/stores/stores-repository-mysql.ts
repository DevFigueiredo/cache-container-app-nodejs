import { Knex } from 'knex'
import { Store } from '../../../../../../shared/domain/store'
import { Builder, IRepository } from '../../../../../../shared/protocols/repositories/repositories'
import { addDelete } from '../../utils/sql_builder/addDelete'
import { addInsert } from '../../utils/sql_builder/addInsert'
import { addUpdate } from '../../utils/sql_builder/addUpdate'
import { addWhere } from '../../utils/sql_builder/addWhere'
import { buildQuery } from '../../utils/sql_builder/buildQuery'
import { buildQueryFirst } from '../../utils/sql_builder/buildQueryFirst'

export class StoreRepository implements IRepository<Store> {
  private readonly collectionName = 'stores'
  private readonly db: Knex

  constructor ({ db }: any) {
    this.db = db
  }

  async findById (params: Builder<Store>): Promise<Store> {
    const stores = await buildQuery(this.db(this.collectionName),
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
    return stores
  }

  async find (params: Builder<Store>): Promise<Store[]> {
    const store = await buildQueryFirst(this.db(this.collectionName),
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
    return store
  }

  async update (params: Builder<Store> & Store): Promise<void> {
    void await buildQuery(this.db(this.collectionName),
      addUpdate<Store>(params),
      addWhere('id', params?.id),
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
  }

  async delete (params: Builder<Store>): Promise<void> {
    void await buildQuery(this.db(this.collectionName),
      addDelete(),
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
  }

  async save (params: Store): Promise<void> {
    void await buildQuery(this.db(this.collectionName),
      addInsert<Store>(params)
    )
  }
}
