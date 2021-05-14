import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import User from '../models/User'

class UsersController {
    async profile(request: Request, response: Response): Promise<Response> {
        const repository = getRepository(User)
        try {
            const user = await repository.find(request.userId)
            return response.json(user)
        } catch (error) {
            const { code, message } = error
            return response.status(400).json({ code, message })
        }
    }

    async store(request: Request, response: Response): Promise<Response> {
        try {
            const repository = getRepository(User)

            const { email } = request.body
            const userExists = await repository.findOne({ where: { email } })

            if (userExists) {
                return response.status(409).json({ message: 'User already exists!' })
            }

            const user = repository.create(request.body)

            await repository.save(user)
            return response.json(user)
        } catch (error) {
            const { code, message } = error
            return response.status(400).json({ code, message })
        }
    }
}

export default new UsersController()
