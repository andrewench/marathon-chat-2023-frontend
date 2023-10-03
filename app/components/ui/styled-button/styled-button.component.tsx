import { FC } from 'react'

import cn from 'clsx'
import { motion } from 'framer-motion'

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
    <motion.button
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
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
    </motion.button>
  )
}
