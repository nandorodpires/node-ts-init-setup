import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/User'

class AuthController {
    async authenticate(request: Request, response: Response) {
        const repository = getRepository(User)
        const { email, password } = request.body

        try {
            const user = await repository.findOne({ where: { email } })

            if (!user) {
                return response.status(401).json({})
            }

            const isValid = await bcrypt.compare(password, user.password)

            if (!isValid) {
                return response.status(401).json({ message: 'Email or password is not valid!' })
            }

            const token = jwt.sign({ id: user.id }, process.env.API_SECRET, { expiresIn: '1d' })

            delete user.password

            response.json({
                user, token
            })
        } catch (error) {
            const { code, message } = error
            return response.status(400).json({ code, message })
        }
    }

    async forgot(request: Request, response: Response) {
        return response.json({ message: 'Endpoint to forgot de password!' })
    }
}

export default new AuthController()
