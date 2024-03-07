import { jwtVerify, SignJWT, type JWTPayload } from 'jose'
import { env } from '../../infrastructure/config/env'
import { type AuthRepository } from '../../core/contracts/application/auth.repository'

const secret = new TextEncoder().encode(env.JWT_SECRET)

export default (): AuthRepository => {
  const verify = async (token: string): Promise<JWTPayload> => {
    const { payload } = await jwtVerify(token, secret)
    return payload
  }

  const signIn = async (payload: JWTPayload): Promise<string> => {
    return await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('2h')
      .sign(secret)
  }

  return {
    verify,
    signIn
  }
}
