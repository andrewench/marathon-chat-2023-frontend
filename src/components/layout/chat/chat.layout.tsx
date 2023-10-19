import { FC, PropsWithChildren, ReactNode } from 'react'

import cn from 'clsx'

import styles from './chat.module.scss'

interface IChatLayout {
  classNames?: {
    box?: string
    innerBox?: string
    chatBox?: string
  }
  slots?: {
    box?: ReactNode
  }
}

export const ChatLayout: FC<PropsWithChildren<IChatLayout>> = ({
  children,
  slots,
  classNames,
}) => {
  return (
    <div className={cn(styles.box, classNames?.box)}>
      <div className={cn(styles.innerBox, classNames?.innerBox)}>
        <div className={cn(styles.chatBox, classNames?.chatBox)}>
          {children}
        </div>
      </div>

      {slots?.box}
    </div>
  )
}
