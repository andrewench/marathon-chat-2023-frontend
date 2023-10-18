import { Path } from 'react-hook-form'

import { TInputRole, TSignUpCredentials } from '@/shared/types'

type TSignUpField = {
  field: Path<TSignUpCredentials>
  placeholder: string
  type: TInputRole
  autoComplete?: 'on' | 'off'
}

export const SignUpFieldsList: TSignUpField[] = [
  {
    field: 'firstName',
    placeholder: 'First Name',
    type: 'text',
  },
  {
    field: 'lastName',
    placeholder: 'Last Name',
    type: 'text',
  },
  {
    field: 'login',
    placeholder: 'Login',
    type: 'text',
    autoComplete: 'off',
  },
  {
    field: 'email',
    placeholder: 'Email',
    type: 'email',
  },
  {
    field: 'password',
    placeholder: 'Password',
    type: 'password',
    autoComplete: 'off',
  },
  {
    field: 'confirm',
    placeholder: 'Confirm Password',
    type: 'password',
    autoComplete: 'off',
  },
]
