import { useRouter } from 'next/navigation'

import { FC, useEffect } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'

import { FormLayout } from '@/components/layout'

import { TextField } from '@/components/ui'

import { LoginFieldsSchema } from '@/shared/schemes'

import { useConfiguredForm } from '@/shared/hooks'

import { TErrorResponse, TLoginCredentials } from '@/shared/types'

import { useLoginMutation } from '@/store/api'

import styles from './login-form.module.scss'

export const LoginForm: FC = () => {
  const methods = useConfiguredForm<TLoginCredentials>(LoginFieldsSchema)

  const router = useRouter()

  const [loginUser, { data, error }] = useLoginMutation()

  const onSubmit: SubmitHandler<TLoginCredentials> = payload => {
    loginUser(payload)
  }

  useEffect(() => {
    if (!data) return

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
  }, [data, router])

  useEffect(() => {
    if (!error) return

    const { data } = error as TErrorResponse

    toast.error(data.message)
  }, [error])

  return (
    <FormLayout<TLoginCredentials>
      methods={methods}
      onSubmit={onSubmit}
      className={styles.form}
    >
      <TextField<TLoginCredentials> placeholder="Login" field="login" />
      <TextField<TLoginCredentials>
        placeholder="Password"
        field="password"
        autoComplete="off"
      />

      <button type="submit" className={styles.submit}>
        Sign In
      </button>
    </FormLayout>
  )
}
