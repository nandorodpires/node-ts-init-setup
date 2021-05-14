import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface TokenPayload {
    id: number,
    iat: number,
    exp: number
}

export default function authMiddleware(request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers

    if (!authorization) {
        return response.status(400).json({ message: '' })
    }

    const token = authorization.replace('Bearer', '').trim()

    try {
        const data = jwt.verify(token, process.env.API_SECRET)
        const { id } = data as TokenPayload
        request.userId = id
    } catch (error) {

    }

    return next()
}
