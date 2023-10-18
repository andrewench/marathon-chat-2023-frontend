import { AppConstant } from '@/shared/constants'

export const createValidatorString = (type: 'min' | 'max', value: number) => {
  return AppConstant.validate.stringPattern[type].replace('$', value.toString())
}
