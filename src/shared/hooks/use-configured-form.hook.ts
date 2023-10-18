import { FieldValues, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { ObjectSchema } from 'yup'

export const useConfiguredForm = <T extends FieldValues>(
  schema: ObjectSchema<T>,
) => {
  return useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  })
}
