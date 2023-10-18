import { useRouter } from 'next/navigation'

import { FC, memo, useEffect } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Form } from '@/components/layout'

import { TextField } from '@/components/ui'

import { TokenService } from '@/services'

import { SignUpFieldsSchema } from '@/shared/schemes'

import { useConfiguredForm, useErrorToast } from '@/shared/hooks'

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

  const [signUp, { data: tokens, error }] = useSignUpMutation()

  const router = useRouter()

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
    if (!tokens) return

    TokenService.setTokens(tokens)

    toast.success('The user has been successfully registered')

    const promise = new Promise<void>(resolve => {
      setTimeout(() => {
        resolve()
      }, 3000)
    })

    toast.success('You are successfully logged in')

    toast
      .promise(promise, {
        pending: 'Redirecting to account',
      })
      .then(() => router.push('/classroom'))
  }, [tokens, router])

  useErrorToast({
    error,
  })

  return (
    <Form methods={methods} onSubmit={onSubmit} className={styles.form}>
      <RenderedFields />

      <button type="submit" className={styles.submit}>
        Sign Up
      </button>
    </Form>
  )
}
