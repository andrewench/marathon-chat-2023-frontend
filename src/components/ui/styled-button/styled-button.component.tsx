import { FC } from 'react'

import cn from 'clsx'
import { motion } from 'framer-motion'

import { PropsWithClassNameAndChildren } from '@/shared/types'

import styles from './styled-button.module.scss'

interface IStyledButton {
  type: 'button' | 'submit'
  variant: 'filled' | 'outline' | 'disabled'
  onClick?: () => void
}

export const StyledButton: FC<PropsWithClassNameAndChildren<IStyledButton>> = ({
  type,
  variant,
  onClick,
  children,
  className,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      type={type}
      onClick={onClick}
      disabled={variant === 'disabled'}
      className={cn(
        styles.button,
        {
          [styles.filled]: variant === 'filled',
          [styles.outline]: variant === 'outline',
          [styles.disabled]: variant === 'disabled',
        },
        className,
      )}
    >
      {children}
    </motion.button>
  )
}
