import { FC } from 'react'

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

export const Flex: FC<PropsWithClassNameAndChildren<IFlex>> = ({
  direction = 'row',
  align = 'stretch',
  content = 'start',
  reversed,
  children,
  className,
}) => {
  return (
    <div
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
}
