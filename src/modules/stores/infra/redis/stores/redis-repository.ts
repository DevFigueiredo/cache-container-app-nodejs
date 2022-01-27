import { Redis } from 'ioredis'
import { promisify } from 'util'
import { Store } from '../../../../../shared/domain/store'
import { IRepositoryCache } from '../../../../../shared/protocols/repositories/repositories'

export class RedisRepository implements IRepositoryCache<string, Store> {
  private readonly collectionName = 'stores'
  private readonly dbCache: Redis

  constructor ({ dbCache }: any) {
    this.dbCache = dbCache
  }

  async find (key: string): Promise<Store> {
    const syncGetRedis = promisify(this.dbCache.get).bind(this.dbCache)
    const finded: any = await syncGetRedis(`${this.collectionName}-${key}`)
    return finded
  }

  async update (key: string, value: Store): Promise<void> {
    const syncSetRedis = promisify(this.dbCache.set).bind(this.dbCache)
    await syncSetRedis(`${this.collectionName}-${key}`, JSON.stringify(value))
  }

  async delete (key: string): Promise<void> {
    const syncDelRedis = promisify(this.dbCache.pipeline().del).bind(this.dbCache)
    await syncDelRedis(key)
  }

  async save (key: string, value: any): Promise<void> {
    const syncSetRedis = promisify(this.dbCache.set).bind(this.dbCache)
    await syncSetRedis(`${this.collectionName}-${key}`, value)
  }
}
