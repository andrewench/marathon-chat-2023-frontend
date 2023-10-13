type TAllCredentials = Record<
  'firstName' | 'lastName' | 'login' | 'email' | 'password' | 'confirm',
  string
>

export type TLoginCredentials = Pick<TAllCredentials, 'login' | 'password'>
export type TSignUpCredentials = TAllCredentials

export type TAllTokens = Record<'accessToken' | 'refreshToken', string>
