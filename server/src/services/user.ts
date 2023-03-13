import { User } from '../types'
import userData from './users.json'

const users: User[] = userData as User[]

export const getUsers = (): User[] => users

export const addUser = (): undefined => undefined
