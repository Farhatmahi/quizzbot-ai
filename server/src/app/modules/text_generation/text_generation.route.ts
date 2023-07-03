import express from 'express'
import { GenerateController } from './text_generation.controller'
import { TextGenerationValidation } from './text_generation.validation'
import validateRequest from '../../middlewares/validateRequest'

const router = express.Router()

router.post(
  '/',
  validateRequest(TextGenerationValidation.createTextGenerationZodSchema),
  GenerateController.generateText
)

export const GenerateRoute = router
