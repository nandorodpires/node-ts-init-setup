import { Router } from 'express'

import AuthController from './app/controllers/AuthController'
import UsersController from './app/controllers/UsersController'

import authMiddleware from './app/middlewares/authMiddleware'
import User from './app/models/User'

const routes = Router()

routes.get('/', () => {
    return { message: 'Hello World' }
})

routes.post('/auth', AuthController.authenticate)
routes.post('/auth/forgot', AuthController.forgot)
routes.get('/users/profile', authMiddleware, UsersController.profile)
routes.post('/users', UsersController.store)
routes.delete('/users', UsersController.delete)

export default routes
