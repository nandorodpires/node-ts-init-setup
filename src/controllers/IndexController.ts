import { Request, Response } from 'express'

class IndexController {
    public async index(request: Request, response: Response): Promise<Response> {
        return response.json({ message: 'Route /' })
    }

    public async users(request: Request, response: Response): Promise<Response> {
        return response.json({ message: 'List of users' })
    }
}

export default new IndexController()
