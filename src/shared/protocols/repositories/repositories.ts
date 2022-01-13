export interface IRepository<T> {
  find: (request: Request, response: Response) => Promise<T>
  update: (request: Request, response: Response) => Promise<void>
  delete: (request: Request, response: Response) => Promise<void>
  save: (request: Request, response: Response) => Promise<void>
}
