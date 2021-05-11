import { Request, Response } from 'express'

class IndexController {
    public async index(request: Request, response: Response): Promise<Response> {
        return response.json({ message: 'Route /' })
    }
}

export default new IndexController()
