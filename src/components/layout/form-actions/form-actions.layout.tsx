import { FC } from 'react'

import cn from 'clsx'

import { Flex } from '@/components/layout'

import { StyledButton } from '@/components/ui'

import { useActions } from '@/shared/hooks'

import { PropsWithClassName } from '@/shared/types'

import { TModalKeys } from '@/store/slices'

import styles from './form-actions.module.scss'

interface IFormActions {
  modalWindow: TModalKeys
  confirm: {
    label: string
    disabled?: boolean
  }
  cancel: {
    label: string
  }
}

export const FormActions: FC<PropsWithClassName<IFormActions>> = ({
  modalWindow,
  confirm,
  cancel,
  className,
}) => {
  const { setModalWindow } = useActions()

  return (
    <Flex className={cn(styles.box, className)}>
      <StyledButton
        variant="filled"
        disabled={confirm.disabled}
        type="submit"
        className={styles.button}
      >
        {confirm.label}
      </StyledButton>

      <StyledButton
        variant="outline"
        type="button"
        onClick={() =>
          setModalWindow({
            modal: modalWindow,
            isOpen: false,
          })
        }
        className={styles.button}
      >
        {cancel.label}
      </StyledButton>
    </Flex>
  )
}
