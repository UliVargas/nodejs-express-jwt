import z from 'zod'

const props = {
  name: z.string().min(3).max(255),
  email: z.string().email(),
  password: z.string().min(6).max(255)
}

export const createUserSchema = z.object({
  name: props.name,
  email: props.email,
  password: props.password
})
