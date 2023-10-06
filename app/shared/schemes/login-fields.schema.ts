import { ObjectSchema, object, string } from 'yup'

import { LoginCredentialsType } from '@/shared/types'

export const LoginFieldsSchema: ObjectSchema<LoginCredentialsType> =
  object().shape({
    login: string().required('The field is required'),
    password: string().required('The field is required'),
  })
