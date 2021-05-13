import { Router } from 'express'

import AuthController from './app/controllers/AuthController'
import UsersController from './app/controllers/UsersController'

const routes = Router()

routes.get('/', () => {
    return { message: 'Hello World' }
})

routes.post('/auth', AuthController.authenticate)
routes.post('/users', UsersController.store)

export default routes
