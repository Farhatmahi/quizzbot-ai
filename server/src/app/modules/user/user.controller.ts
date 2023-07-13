import { NextFunction, Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { UserService } from './user.service'
import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendReponse'

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { email, password, avatar, membership, transaction } = req.body.user
  const user = { email, password, avatar, membership, transaction }
  const result = await UserService.createUser(user)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  })
})

const getUser = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.body

  const result = await UserService.getUser(email)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User get successfully',
    data: result,
  })
})

export const UserController = { createUser, getUser }
