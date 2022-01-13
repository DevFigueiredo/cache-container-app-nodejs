export interface IRepository<T> {
  find: (params: T) => Promise<T[] | T>
  findById: (params: T) => Promise<T | undefined>
  update: (params: T) => Promise<void>
  delete: (params: T) => Promise<void>
  save: (params: T) => Promise<void>
}
