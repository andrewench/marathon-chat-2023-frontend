import { useMemo } from 'react'
import { FieldValues, Path, useFormContext } from 'react-hook-form'

import cn from 'clsx'

import { PropsWithClassName, TInputRole } from '@/shared/types'

import styles from './text-field.module.scss'

export interface ITextField<T extends FieldValues> {
  placeholder: string
  field: Path<T>
  autoComplete?: 'on' | 'off'
  type?: TInputRole
  multiLine?: boolean
}

export const TextField = <T extends FieldValues>({
  field,
  autoComplete,
  multiLine,
  className,
  ...props
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

  const fieldProps = {
    ...overrideRegister,
    ...props,
    className: cn(
      styles.field,
      {
        [styles.textarea]: multiLine,
        'scroll-bar': multiLine,
      },
      className,
    ),
  }

  return (
    <div className={cn(className)}>
      {multiLine ? <textarea {...fieldProps} /> : <input {...fieldProps} />}

      {errors && errors[field]?.message && (
        <p className={styles.error}>{errors[field]?.message as string}</p>
      )}
    </div>
  )
}
