import bcrypt from 'bcrypt'
import { IUser } from './user.interface'
import { User } from './user.model'
import ApiError from '../../../errors/ApiError'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const { email, password } = user

  const existingUser = await User.findOne({ email })
  if (existingUser) {
    throw new ApiError(400, 'Email already exists')
  }

  const salt = await bcrypt.genSalt()
  const passwordHash = await bcrypt.hash(password, salt)
  user.password = passwordHash

  const createdUser = await User.create(user)
  if (!createUser) {
    throw new ApiError(400, 'Failed to create user')
  }

  return createdUser
}

export const UserService = { createUser }
