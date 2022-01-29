import { Request, Response } from 'express'
import { container } from '../container'
import { DateTime } from 'luxon'
import { IUseCase } from '../protocols/useCases/use-cases'
import { Cache } from '../domain/cache'

export function CacheAPI (time: number): Function {
  return (_: any, __: string, descriptor: PropertyDescriptor) => {
    const originalFunction = descriptor.value
    descriptor.value = async function (...args: any) {
      // const repositoryCache: IRepositoryCache<any, string> = container.resolve('redisRepository')
      const saveCacheUseCases: IUseCase<Pick<Cache, 'value'>, Pick<Cache, 'key'>, void> = container.resolve('saveCacheUseCases')
      const findCacheUseCases: IUseCase<Pick<Cache, 'value'>, Pick<Cache, 'key'>, any> = container.resolve('findCacheUseCases')

      const request: Request = args[0]
      const response: Response = args[1]
      const path = request.url
      const cacheDateTimeMax = await findCacheUseCases.execute({ params: { key: `datetime-${path}` } })
      const now = DateTime.now().toSeconds()

      if (cacheDateTimeMax < now) {
        await saveCacheUseCases.execute({ params: { key: path }, entity: { value: undefined } })
        await saveCacheUseCases.execute({ params: { key: `datetime-${path}` }, entity: { value: undefined } })
      }

      const cache = await findCacheUseCases.execute({ params: { key: path } })

      if (cache) {
        response.status(200).json(cache)
      }

      if (!cache) {
        const oldJSON = response.json
        response.json = async (data: any) => {
          if (data) {
            const timetoExpireCache = DateTime.now().plus({
              seconds: Number(time)
            }).toSeconds()

            await saveCacheUseCases.execute({ params: { key: path }, entity: { value: data } })
            await saveCacheUseCases.execute({
              params: { key: `datetime-${path}` },
              entity: { value: timetoExpireCache }
            })

            return oldJSON.call(response, data)
          }
        }
        await originalFunction.apply(this, args)
      }

      return descriptor
    }
  }
}
