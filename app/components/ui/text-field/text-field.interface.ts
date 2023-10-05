import { FieldValues, Path } from 'react-hook-form'

export interface ITextField<T extends FieldValues> {
  placeholder: string
  field: Path<T>
  autoComplete?: 'on' | 'off'
  showError?: boolean
}
