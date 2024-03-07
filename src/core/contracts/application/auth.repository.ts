import { type JWTPayload } from 'jose'

export interface AuthRepository {
  verify: (token: string) => Promise<JWTPayload>
  signIn: (payload: JWTPayload) => Promise<string>
}
