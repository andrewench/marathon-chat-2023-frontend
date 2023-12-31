import { FC, ReactNode } from 'react'

import cn from 'clsx'
import { motion } from 'framer-motion'

import { PropsWithClassName } from '@/shared/types'

import styles from './control-button.module.scss'

interface IControlButton {
  icon?: ReactNode
  doubleIcons?: {
    firstIcon?: ReactNode
    secondIcon?: ReactNode
  }
  variant: 'primary' | 'secondary'
  onClick?: () => void
}

export const ControlButton: FC<PropsWithClassName<IControlButton>> = ({
  icon,
  doubleIcons,
  variant,
  onClick,
  className,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      onClick={onClick}
      className={cn(
        styles.button,
        {
          [styles.primary]: variant === 'primary',
          [styles.secondary]: variant === 'secondary',
        },
        className,
      )}
    >
      {doubleIcons?.firstIcon || doubleIcons?.secondIcon ? (
        <>{doubleIcons.firstIcon || doubleIcons.secondIcon}</>
      ) : (
        <>{icon}</>
      )}
    </motion.button>
  )
}
