import { FC } from 'react'
import SimpleBar from 'simplebar-react'

import cn from 'clsx'

import { PropsWithClassNameAndChildren } from '@/shared/types'

import styles from './scrollbox.module.scss'

export const ScrollBox: FC<PropsWithClassNameAndChildren> = ({
  children,
  className,
}) => {
  return <SimpleBar className={cn(styles.box, className)}>{children}</SimpleBar>
}
