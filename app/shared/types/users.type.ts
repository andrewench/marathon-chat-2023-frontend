type TUserRole = 'student' | 'assistentProfessor' | 'professor' | 'admin'

export interface IUser {
  id: number
  firstName: string
  lastName: string
  login: string
  email: string
  role: TUserRole
}

export interface IMessagePayload {
  id: number
  text: string
  firstName: string
  lastName: string
}
