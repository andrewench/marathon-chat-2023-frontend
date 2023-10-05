type AllCredentialsType = Record<
  'firstName' | 'lastName' | 'login' | 'email' | 'password' | 'confirm',
  string
>

export type LoginCredentialsType = Pick<
  AllCredentialsType,
  'login' | 'password'
>
export type SignUpCredentialsType = AllCredentialsType
