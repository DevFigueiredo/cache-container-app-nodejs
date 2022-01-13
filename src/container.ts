import { createContainer, asClass, InjectionMode } from 'awilix'

const container = createContainer({
  injectionMode: InjectionMode.PROXY
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class Temp {

}

container.register({

  storeService: asClass(Temp)
})
