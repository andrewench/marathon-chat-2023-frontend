type TUserRole = 'student' | 'assistentProfessor' | 'professor' | 'admin'

export interface IUser {
  firstName: string
  lastName: string
  login: string
  email: string
  role: TUserRole
}
