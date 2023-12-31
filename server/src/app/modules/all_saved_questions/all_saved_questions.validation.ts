import { z } from 'zod'

const createSavedQuestionZodSchema = z.object({
  body: z.object({
    question: z.object({
      how_many_questions: z.string({}).optional(),
      paste_text: z.string({
        required_error: 'Text is required',
      }),
      language: z.string({
        required_error: 'Language is required',
      }),
      difficulty: z.string({
        required_error: 'Difficulty is required',
      }),
      number_of_sets: z.string().optional(),
      title: z.string({
        required_error: 'Title is required',
      }),
      generatedText: z.string({
        required_error: 'Generated text is required',
      }),
    }),
  }),
})

export const AllSavedQuestionsValidation = { createSavedQuestionZodSchema }
