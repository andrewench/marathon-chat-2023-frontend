import { useMemo } from 'react'
import { FieldValues, useFormContext } from 'react-hook-form'

import cn from 'clsx'

import { PropsWithClassName } from '@/shared/types'

import { ITextField } from './text-field.interface'

import styles from './text-field.module.scss'

export const TextField = <T extends FieldValues>({
  placeholder,
  field,
  autoComplete,
  showError,
  className,
}: PropsWithClassName<ITextField<T>>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>()

  const overrideRegister = useMemo(
    () => ({
      ...register(field, {
        required: true,
      }),
      onChange: () => {},
    }),
    [field, register],
  )

  return (
    <div className={cn(className)}>
      <input
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={styles.input}
        {...overrideRegister}
      />

      {errors && errors[field]?.message && (
        <p className={styles.error}>{errors[field]?.message as string}</p>
      )}
    </div>
  )
}
