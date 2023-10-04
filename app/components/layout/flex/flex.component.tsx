import { ForwardedRef, forwardRef } from 'react'

import cn from 'clsx'

import { PropsWithClassNameAndChildren } from '@/shared/types'

import {
  FlexCrossAxisType,
  FlexDirectionType,
  FlexMainAxisType,
} from './flex.interface'

import styles from './flex.module.scss'

interface IFlex {
  direction?: FlexDirectionType
  align?: FlexMainAxisType
  content?: FlexCrossAxisType
  reversed?: boolean
}

export const Flex = forwardRef(function Flex(
  {
    direction = 'row',
    align,
    content = 'start',
    reversed,
    children,
    className,
  }: PropsWithClassNameAndChildren<IFlex>,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      className={cn(
        styles.box,
        {
          [styles.column]: direction === 'column',
          [styles.reversed]: reversed,
          [styles.alignStart]: align === 'start',
          [styles.alignCenter]: align === 'center',
          [styles.alignEnd]: align === 'end',
          [styles.contentStart]: content === 'start',
          [styles.contentCenter]: content === 'center',
          [styles.contentEnd]: content === 'end',
          [styles.contentBetween]: content === 'space-between',
          [styles.contentAround]: content === 'space-around',
          [styles.contentEvenly]: content === 'space-evenly',
        },
        className,
      )}
    >
      {children}
    </div>
  )
})
