import { ObjectSchema, object, ref, string } from 'yup'

import { patternList } from '@/shared/patterns'

import { createValidatorString } from '@/shared/utils'

import { TSignUpCredentials } from '@/shared/types'

export const SignUpFieldsSchema: ObjectSchema<TSignUpCredentials> =
  object().shape({
    firstName: string()
      .required('The field is required')
      .min(2, createValidatorString('min', 2))
      .max(24, createValidatorString('max', 24))
      .matches(patternList.firstName, {
        message: 'The field must contain only alphabetic characters',
      }),
    lastName: string()
      .required('The field is required')
      .min(3, createValidatorString('min', 3))
      .max(24, createValidatorString('max', 24))
      .matches(patternList.lastName, {
        message: 'The field must contain only alphabetic characters',
      }),
    login: string()
      .required('The field is required')
      .min(6, createValidatorString('min', 6))
      .max(16, createValidatorString('max', 16))
      .matches(patternList.login, {
        message:
          'The field must contain only alphanumeric characters, _ and start with a letter',
      }),
    email: string()
      .required('The field is required')
      .matches(patternList.email, {
        message: 'Invalid email format',
      }),
    password: string()
      .required('The field is required')
      .matches(patternList.password, {
        message:
          'The password must contain special characters: #?!@$%^&* - and it have a length of at least 8 characters',
      })
      .min(8, createValidatorString('min', 8))
      .max(32, createValidatorString('max', 32)),
    confirm: string()
      .required('The field is required')
      .matches(patternList.password, {
        message:
          'The password must contain special characters: #?!@$%^&* - and it have a length of at least 8 characters',
      })
      .min(8, createValidatorString('min', 8))
      .max(32, createValidatorString('max', 32))
      .oneOf([ref('password')], `Password doesn't match`),
  })
