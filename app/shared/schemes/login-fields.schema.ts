import { ObjectSchema, object, string } from 'yup'

import { TLoginCredentials } from '@/shared/types'

export const LoginFieldsSchema: ObjectSchema<TLoginCredentials> =
  object().shape({
    login: string().required('The field is required'),
    password: string().required('The field is required'),
  })
