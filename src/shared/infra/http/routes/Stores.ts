import { Router } from 'express'
const routes = Router()

routes.get('/', (req, res) => res.json({ message: 'ok' }))
routes.post('/', () => {})

routes.get('/:id', () => {})
routes.patch('/:id', () => {})

export default routes
