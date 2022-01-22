import { Router } from 'express'
import { container } from '../../../container'
const routes = Router()

routes.get('/', container.resolve('createStoreController').execute)
routes.post('/', container.resolve('createStoreController').execute)

routes.get('/:id', container.resolve('createStoreController').execute)
routes.patch('/:id', container.resolve('createStoreController').execute)

export default routes
