export interface IUseCase<T, A> {
  execute: (params: T) => Promise<A>
}
