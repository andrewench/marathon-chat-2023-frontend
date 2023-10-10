import { FC } from 'react'

import { Flex, ModalWindow } from '@/components/layout'

import { StyledButton } from '@/components/ui'

import styles from './confirm-modal.module.scss'

interface IConfirmModalWindow {
  title: string
  onConfirm: () => void
  onClose: () => void
  labels: {
    confirm: string
    cancel: string
  }
}

export const ConfirmModalWindow: FC<IConfirmModalWindow> = ({
  title,
  onConfirm,
  onClose,
  labels,
}) => {
  return (
    <ModalWindow title={title} onClose={onClose}>
      <Flex content="end" className={styles.actions}>
        <StyledButton
          variant="filled"
          onClick={() => onConfirm()}
          className={styles.button}
        >
          {labels.confirm}
        </StyledButton>

        <StyledButton
          variant="outline"
          onClick={() => onClose()}
          className={styles.button}
        >
          {labels.cancel}
        </StyledButton>
      </Flex>
    </ModalWindow>
  )
}
