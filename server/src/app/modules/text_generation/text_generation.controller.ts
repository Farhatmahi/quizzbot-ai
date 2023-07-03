import { NextFunction, Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'

import sendResponse from '../../../shared/sendReponse'
import httpStatus from 'http-status'
import { TextGenerationService } from './text_generation.service'

export const generateText = catchAsync(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const prompt = req.body.prompt
    const result = await TextGenerationService.generateText(prompt)

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Generated text successfully',
      data: result,
    })

    next()
  }
)

export const GenerateController = { generateText }
