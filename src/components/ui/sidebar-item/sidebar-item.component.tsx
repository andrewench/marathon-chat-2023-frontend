import { FC, ReactNode } from 'react'

import cn from 'clsx'

import { useAppSelector } from '@/shared/hooks'

import { app } from '@/store/slices'

import styles from './sidebar-item.module.scss'

interface ISideBarItem {
  label: string
  icon: ReactNode
}

export const SideBarItem: FC<ISideBarItem> = ({ label, icon }) => {
  const { sideBar } = useAppSelector(app)

  return (
    <li className={styles.item}>
      <button
        className={cn(styles.button, {
          [styles.minimized]: !sideBar.isOpen,
        })}
      >
        {icon}

        {sideBar.isOpen && <p className={styles.text}>{label}</p>}
      </button>
    </li>
  )
}
