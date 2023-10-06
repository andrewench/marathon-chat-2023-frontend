import { FC, memo } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Flex, FormLayout } from '@/components/layout'

import { TextField } from '@/components/ui'

import { SignUpCredentialsType } from '@/shared/types'

import { SignUpFieldsList } from './signup-form.data'

import styles from './signup-form.module.scss'

const RenderedFields = memo(function RenderedFields() {
  return SignUpFieldsList.map((props, idx) => (
    <TextField<SignUpCredentialsType> {...props} key={idx} />
  ))
})

export const SignUpForm: FC = () => {
  const methods = useForm<SignUpCredentialsType>()

  const onSubmit: SubmitHandler<SignUpCredentialsType> = data => {
    console.log(data)
  }

  return (
    <FormLayout methods={methods} onSubmit={onSubmit} className={styles.form}>
      <RenderedFields />

      <button type="submit" className={styles.submit}>
        Sign Up
      </button>
    </FormLayout>
  )
}
