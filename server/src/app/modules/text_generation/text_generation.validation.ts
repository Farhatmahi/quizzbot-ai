import { z } from 'zod'

const createTextGenerationZodSchema = z.object({
  body: z.object({
    prompt: z.string({
        required_error : "Prompt is required"
    })
  }),
})

export const TextGenerationValidation = { createTextGenerationZodSchema }
