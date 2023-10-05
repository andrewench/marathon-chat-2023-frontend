import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form'

import cn from 'clsx'

import { PropsWithClassNameAndChildren } from '@/shared/types'

interface IFormLayout<T extends FieldValues> {
  methods: UseFormReturn<T>
  onSubmit: SubmitHandler<T>
}

export const FormLayout = <T extends FieldValues>({
  methods,
  onSubmit,
  children,
  className,
}: PropsWithClassNameAndChildren<IFormLayout<T>>) => {
  return (
    <FormProvider {...methods}>
      <form
        noValidate
        onSubmit={methods.handleSubmit(onSubmit)}
        className={cn(className)}
      >
        {children}
      </form>
    </FormProvider>
  )
}
