import { Builder } from './builder'

export interface IRepository<Entity> {
  find: (params: Builder<Entity>) => Promise<Entity[]>
  update: (entity: Entity, params: Builder<Entity>) => Promise<void>
  delete: (params: Builder<Entity>) => Promise<void>
  save: (params: Entity) => Promise<void>
}

export interface IRepositoryCache<Param, Entity> {
  find: (key: Param) => Promise<Entity[]>
  update: (key: Param, value: Entity) => Promise<void>
  delete: (key: Param) => Promise<void>
  save: (key: Param, value: Entity) => Promise<void>
}
