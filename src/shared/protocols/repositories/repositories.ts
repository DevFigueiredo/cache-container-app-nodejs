export interface Builder<T> {
  where: T
}
export interface IRepository<T> {
  find: (params: Builder<T>) => Promise<T[]>
  findById: (params: Builder<T>) => Promise<T | undefined>
  update: (params: Builder<T> & T) => Promise<void>
  delete: (params: Builder<T> & T) => Promise<void>
  save: (params: T) => Promise<void>
}
