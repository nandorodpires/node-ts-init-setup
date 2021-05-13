import { Request, Response, NextFunction } from 'express'

export default function authMiddleware(request: Request, response: Response, next: NextFunction) {
    return next()
}
