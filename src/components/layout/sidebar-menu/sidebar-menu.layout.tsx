import { FC } from 'react'

import cn from 'clsx'

import { SideBarItem } from '@/components/ui'

import { PropsWithClassName } from '@/shared/types'

import { SideBarMenuList } from './sidebar-menu.data'

import styles from './sidebar-menu.module.scss'

export const SideBarMenu: FC<PropsWithClassName> = ({ className }) => {
  return (
    <ul className={cn(styles.list, className)}>
      {SideBarMenuList.map((item, idx) => (
        <SideBarItem label={item.label} icon={item.icon} key={idx} />
      ))}
    </ul>
  )
}
