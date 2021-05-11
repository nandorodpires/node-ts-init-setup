import { Router } from 'express'

const routes = Router()

routes.get('/', () => {
    return { message: 'Hello World' }
})

export default routes
