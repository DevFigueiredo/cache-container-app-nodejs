import { Builder } from './builder'

export interface IRepository<Entity> {
  find: (params: Builder<Entity>) => Promise<Entity[]>
  update: (entity: Entity, params: Builder<Entity>) => Promise<void>
  delete: (params: Builder<Entity>) => Promise<void>
  save: (params: Entity) => Promise<void>
}

export interface IRepositoryCache<Entity, Param> {
  find: (key: Param) => Promise<Entity>
  save: (key: Param, value: Entity) => Promise<void>
}
