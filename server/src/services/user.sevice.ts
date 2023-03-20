import { User } from '../types'
import userData from './users.json'

const users: User[] = userData as User[]

export const getUsers = (): User[] => users

export const findById = (id: string): User | undefined => {
  const user = users.find((d) => d.id === id)
  return user
}

export const addUser = (): undefined => undefined
