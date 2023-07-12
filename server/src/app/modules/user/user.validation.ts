import { z } from 'zod'

const createUserZodSchema = z.object({
  body: z.object({
    user: z.object({
      email: z.string({
        required_error: 'Email is required',
      }),
      password: z.string({
        required_error: 'Password is required',
      }),
      avatar: z.string().nullable(),
      membership: z.string().nullable(),
      transaction: z.string().nullable(),
    }),
  }),
})

const getUserZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required',
    }),
  }),
})

export const UserValidation = { createUserZodSchema, getUserZodSchema }
