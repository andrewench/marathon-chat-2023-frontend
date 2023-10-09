import { FieldValues, Path } from 'react-hook-form'

import { TInputRole } from '@/shared/types'

export interface ITextField<T extends FieldValues> {
  placeholder: string
  field: Path<T>
  autoComplete?: 'on' | 'off'
  type: TInputRole
}
