export interface IUseCase<T> {
  execute: (params?: T) => Promise<T>
}
