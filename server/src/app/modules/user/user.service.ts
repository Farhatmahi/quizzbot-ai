import bcrypt from 'bcrypt'
import { IUser } from './user.interface'
import { User } from './user.model'
import ApiError from '../../../errors/ApiError'

const createUser = async (user: IUser): Promise<IUser | null | undefined> => {
  const { email, password } = user

  const existingUser = await User.findOne({ email })
  if (existingUser) {
    return;
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

const getUser = async (email: string): Promise<IUser | null> => {
  const user = await User.findOne({ email })
  if (!user) {
    throw new ApiError(400, 'User not found')
  }
  return user
}

export const UserService = { createUser, getUser }
