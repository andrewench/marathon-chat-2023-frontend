import { LogOut } from 'lucide-react'
import { memo } from 'react'

import cn from 'clsx'

import { Divider } from '@/components/shared'

import { SideBarItem } from '@/components/ui'

import { useActions } from '@/shared/hooks'

import { PropsWithClassName } from '@/shared/types'

import { SideBarMenuList } from './sidebar-menu.data'

import styles from './sidebar-menu.module.scss'

export const SideBarMenu = memo(function SideBarMenu({
  className,
}: PropsWithClassName) {
  const { setModalWindow } = useActions()

  return (
    <ul className={cn(styles.list, className)}>
      {SideBarMenuList.map((item, idx) => (
        <SideBarItem label={item.label} icon={item.icon} key={idx} />
      ))}

      <Divider variant="thin" marginY={5} />

      <SideBarItem
        label="Log out"
        icon={<LogOut strokeWidth={1} />}
        onClick={() => {
          setModalWindow({
            modal: 'logout',
            isOpen: true,
          })
        }}
      />
    </ul>
  )
})
