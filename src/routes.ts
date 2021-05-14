import { Router } from 'express'

import AuthController from './app/controllers/AuthController'
import UsersController from './app/controllers/UsersController'

import authMiddleware from './app/middlewares/authMiddleware'

const routes = Router()

routes.get('/', () => {
    return { message: 'Hello World' }
})

routes.post('/auth', AuthController.authenticate)
routes.get('/users/profile', authMiddleware, UsersController.profile)
routes.post('/users', UsersController.store)

export default routes
