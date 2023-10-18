import { FC } from 'react'

import cn from 'clsx'

import { PropsWithClassName } from '@/shared/types'

import styles from './divider.module.scss'

interface IDivider {
  variant: 'thin' | 'medium'
  marginY: 5 | 10
}

export const Divider: FC<PropsWithClassName<IDivider>> = ({
  variant,
  marginY,
  className,
}) => {
  return (
    <div
      className={cn(
        styles.box,
        {
          [styles.thin]: variant === 'thin',
          [styles.medium]: variant === 'medium',
          [styles.marginY5]: marginY === 5,
          [styles.marginY10]: marginY === 10,
        },
        className,
      )}
    />
  )
}
