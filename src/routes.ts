import { Router } from 'express'

import AuthController from './app/controllers/AuthController'

const routes = Router()

routes.get('/', () => {
    return { message: 'Hello World' }
})

routes.post('/auth', AuthController.authenticate)

export default routes
