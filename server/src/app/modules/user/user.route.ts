import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { UserController } from './user.controller'
import { UserValidation } from './user.validation'

const router = express.Router()

router.post(
  '/create-user',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser
)

router.post(
  '/get-user',
  validateRequest(UserValidation.getUserZodSchema),
  UserController.getUser
)

export const UserRoute = router
