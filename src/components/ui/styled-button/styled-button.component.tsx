import { FC } from 'react'

import cn from 'clsx'

import { PropsWithClassNameAndChildren } from '@/shared/types'

import styles from './styled-button.module.scss'

interface IStyledButton {
  variant: 'filled' | 'outline'
  onClick?: () => void
}

export const StyledButton: FC<PropsWithClassNameAndChildren<IStyledButton>> = ({
  variant,
  onClick,
  children,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        styles.button,
        {
          [styles.filled]: variant === 'filled',
          [styles.outline]: variant === 'outline',
        },
        className,
      )}
    >
      {children}
    </button>
  )
}
