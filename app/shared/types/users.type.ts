type TUserRole = 'student' | 'assistentProfessor' | 'professor' | 'admin'

export interface IUser {
  id: number
  firstName: string
  lastName: string
  login: string
  email: string
  role: TUserRole
  avatar: string | null
}

export type TMessagePayload = Pick<IUser, 'id' | 'firstName' | 'lastName'> & {
  text: string
}

export type TTypingPayload = Pick<IUser, 'id' | 'firstName' | 'lastName'> & {
  isTyping: boolean
}
