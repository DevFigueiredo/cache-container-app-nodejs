export interface IUseCase<Param, Response> {
  execute: (params: Param) => Promise<Response>
}
