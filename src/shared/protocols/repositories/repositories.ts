export interface Builder<Entity> {
  where?: Partial<Entity>
}
export interface IRepository<Entity> {
  find: (params: Builder<Entity>) => Promise<Entity[]>
  findById: (params: Builder<Entity>) => Promise<Entity | undefined>
  update: (params: Builder<Entity> & Entity) => Promise<void>
  delete: (params: Builder<Entity>) => Promise<void>
  save: (params: Entity) => Promise<void>
}
