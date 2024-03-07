import { type Request, type Response, type NextFunction } from 'express'
import { type Dependencies } from '../../infrastructure/config/dependencies'
import { type JWTPayload } from 'jose'

type RequestContext = Request & {
  user: JWTPayload
}

export default (dependencies: Dependencies) => async (req: RequestContext, res: Response, next: NextFunction) => {
  // Get the token from the request headers
  const token = req.headers.authorization?.split(' ')[1]

  if (token === null) {
    return res.status(401).json({ message: 'No token provided' })
  }

  try {
    // Verify and decode the token
    const decoded = await dependencies.authRepository.verify(token ?? '')

    // Attach the decoded payload to the request object
    req.user = decoded

    // Call the next middleware or route handler
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' })
  }
}
