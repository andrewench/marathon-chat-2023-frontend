import { Path } from 'react-hook-form'

import { SignUpCredentialsType } from '@/shared/types'

type SignUpFieldType = {
  field: Path<SignUpCredentialsType>
  placeholder: string
  autoComplete?: 'on' | 'off'
}

export const SignUpFieldsList: SignUpFieldType[] = [
  {
    field: 'firstName',
    placeholder: 'First Name',
  },
  {
    field: 'lastName',
    placeholder: 'Last Name',
  },
  {
    field: 'login',
    placeholder: 'Login',
    autoComplete: 'off',
  },
  {
    field: 'email',
    placeholder: 'Email',
  },
  {
    field: 'password',
    placeholder: 'Password',
    autoComplete: 'off',
  },
  {
    field: 'confirm',
    placeholder: 'Confirm Password',
    autoComplete: 'off',
  },
]
