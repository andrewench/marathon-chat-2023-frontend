import { FC, memo } from 'react'
import { SubmitHandler } from 'react-hook-form'

import { FormLayout } from '@/components/layout'

import { TextField } from '@/components/ui'

import { SignUpFieldsSchema } from '@/shared/schemes'

import { useConfiguredForm } from '@/shared/hooks'

import { SignUpCredentialsType } from '@/shared/types'

import { SignUpFieldsList } from './signup-form.data'

import styles from './signup-form.module.scss'

const RenderedFields = memo(function RenderedFields() {
  return SignUpFieldsList.map((props, idx) => (
    <TextField<SignUpCredentialsType> {...props} key={idx} />
  ))
})

export const SignUpForm: FC = () => {
  const methods = useConfiguredForm<SignUpCredentialsType>(SignUpFieldsSchema)

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
