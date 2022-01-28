import { Request, Response } from 'express'
import { container } from '../container'
import { IRepositoryCache } from '../protocols/repositories/repositories'
import { DateTime } from 'luxon'

export function CacheAPI (time: number): Function {
  return (_: any, __: string, descriptor: PropertyDescriptor) => {
    const originalFunction = descriptor.value
    descriptor.value = async function (...args: any) {
      const repositoryCache: IRepositoryCache<string, any> = container.resolve('redisRepository')
      const request: Request = args[0]
      const response: Response = args[1]
      const path = request.url
      const cacheDateTimeMax = await repositoryCache.find(`datetime-${path}`)
      const now = DateTime.now().toSeconds()

      if (cacheDateTimeMax < now) {
        await repositoryCache.save(path, undefined as any)
        await repositoryCache.save(`datetime-${path}`, undefined as any)
      }

      const cache = await repositoryCache.find(path)

      if (cache) {
        response.status(200).json(cache)
      }

      if (!cache) {
        const oldJSON = response.json
        response.json = async (data: any) => {
          if (data) {
            await repositoryCache.save(path, data)
            await repositoryCache.save(`datetime-${path}`, DateTime.now().plus({
              seconds: Number(time)
            }).toSeconds())
            return oldJSON.call(response, data)
          }
        }
        await originalFunction.apply(this, args)
      }

      return descriptor
    }
  }
}
