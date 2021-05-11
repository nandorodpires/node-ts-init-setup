import { Request, Response } from 'express'
class AuthController {
    async authenticate(request: Request, response: Response) {
        return response.json({ message: 'Authenticate method' })
    }
}

export default new AuthController()
