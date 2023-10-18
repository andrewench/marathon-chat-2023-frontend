import { Dispatch, FC, SetStateAction } from 'react'

import cn from 'clsx'

import { StyledButton } from '@/components/ui'

import { PropsWithClassNameAndChildren } from '@/shared/types'

import styles from './chat-tab.module.scss'

interface IChatTab {
  tabIndex: number
  currentTab: number
  setTab: Dispatch<SetStateAction<number>>
  onClick?: () => void
}

export const ChatTab: FC<PropsWithClassNameAndChildren<IChatTab>> = ({
  tabIndex,
  currentTab,
  setTab,
  onClick,
  children,
  className,
}) => {
  const clickHandler = () => {
    setTab(tabIndex)

    if (onClick) onClick()
  }

  return (
    <StyledButton
      type="button"
      variant={currentTab === tabIndex ? 'filled' : 'outline'}
      onClick={clickHandler}
      className={cn(styles.tab, className)}
    >
      {children}
    </StyledButton>
  )
}
