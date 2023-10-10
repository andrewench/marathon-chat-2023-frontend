import { useRouter } from 'next/navigation'

import { FC, useEffect } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'

import Cookies from 'js-cookie'

import { Form } from '@/components/layout'

import { TextField } from '@/components/ui'

import { AppConstant } from '@/shared/constants'

import { LoginFieldsSchema } from '@/shared/schemes'

import { useConfiguredForm, useErrorToast } from '@/shared/hooks'

import { TLoginCredentials } from '@/shared/types'

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

    const { accessToken, refreshToken } = data

    Cookies.set(AppConstant.tokens.at.prefix, accessToken, {
      expires: AppConstant.tokens.at.lifeTime,
    })

    Cookies.set(AppConstant.tokens.rt.prefix, refreshToken, {
      expires: AppConstant.tokens.rt.lifeTime,
    })

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

  useErrorToast({
    error,
  })

  return (
    <Form<TLoginCredentials>
      methods={methods}
      onSubmit={onSubmit}
      className={styles.form}
    >
      <TextField<TLoginCredentials>
        placeholder="Login"
        field="login"
        type="text"
      />
      <TextField<TLoginCredentials>
        placeholder="Password"
        field="password"
        type="password"
        autoComplete="off"
      />

      <button type="submit" className={styles.submit}>
        Sign In
      </button>
    </Form>
  )
}
