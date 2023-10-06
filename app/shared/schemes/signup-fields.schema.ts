import { ObjectSchema, object, string } from 'yup'

import { SignUpCredentialsType } from '@/shared/types'

export const SignUpFieldsSchema: ObjectSchema<SignUpCredentialsType> =
  object().shape({
    firstName: string().required('The field is required'),
    lastName: string().required('The field is required'),
    login: string().required('The field is required'),
    email: string().required('The field is required'),
    password: string().required('The field is required'),
    confirm: string().required('The field is required'),
  })
