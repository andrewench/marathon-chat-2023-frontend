import { FC } from 'react'

import cn from 'clsx'

import { PropsWithClassName } from '@/shared/types'

import styles from './heading.module.scss'

interface IHeading {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  variant?: 'styled'
  children: string
}

export const Heading: FC<PropsWithClassName<IHeading>> = ({
  as,
  variant,
  children,
  className,
}) => {
  const Component = as

  return (
    <Component
      className={cn(className, {
        [styles.styled]: variant === 'styled',
      })}
    >
      {children}
    </Component>
  )
}
