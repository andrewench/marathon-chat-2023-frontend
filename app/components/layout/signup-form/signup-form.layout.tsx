import { FC, memo, useEffect } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'

import Cookies from 'js-cookie'

import { FormLayout } from '@/components/layout'

import { TextField } from '@/components/ui'

import { AppConstant } from '@/shared/constants'

import { SignUpFieldsSchema } from '@/shared/schemes'

import { useConfiguredForm } from '@/shared/hooks'

import { TSignUpCredentials } from '@/shared/types'

import { useSignUpMutation } from '@/store/api'

import { SignUpFieldsList } from './signup-form.data'

import styles from './signup-form.module.scss'

const RenderedFields = memo(function RenderedFields() {
  return SignUpFieldsList.map((props, idx) => (
    <TextField<TSignUpCredentials> {...props} key={idx} />
  ))
})

export const SignUpForm: FC = () => {
  const methods = useConfiguredForm<TSignUpCredentials>(SignUpFieldsSchema)

  const [signUp, { data, error }] = useSignUpMutation()

  const onSubmit: SubmitHandler<TSignUpCredentials> = payload => {
    const { firstName, lastName, login, email, password } = payload

    signUp({
      firstName,
      lastName,
      login,
      email,
      password,
    })
  }

  useEffect(() => {
    if (!data) return

    const { accessToken } = data

    Cookies.set(AppConstant.tokens.at.prefix, accessToken, {
      expires: AppConstant.tokens.at.lifeTime,
    })

    toast.success('The user has been successfully registered')
  }, [data])

  useEffect(() => {
    if (!error) return

    toast.error('Error')
  }, [error])

  return (
    <FormLayout methods={methods} onSubmit={onSubmit} className={styles.form}>
      <RenderedFields />

      <button type="submit" className={styles.submit}>
        Sign Up
      </button>
    </FormLayout>
  )
}
