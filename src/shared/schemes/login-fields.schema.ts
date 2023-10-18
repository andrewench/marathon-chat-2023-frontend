import { ObjectSchema, object, string } from 'yup'

import { patternList } from '@/shared/patterns'

import { createValidatorString } from '@/shared/utils'

import { TLoginCredentials } from '@/shared/types'

export const LoginFieldsSchema: ObjectSchema<TLoginCredentials> =
  object().shape({
    login: string()
      .required('The field is required')
      .min(6, createValidatorString('min', 6))
      .max(16, createValidatorString('max', 16)),
    password: string()
      .required('The field is required')
      .matches(patternList.password, {
        message:
          'The password must contain special characters: #?!@$%^&* - and it have a length of at least 8 characters',
      })
      .min(8, createValidatorString('min', 8))
      .max(24, createValidatorString('max', 24)),
  })
