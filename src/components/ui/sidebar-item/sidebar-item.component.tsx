import { FC, ReactNode } from 'react'

import styles from './sidebar-item.module.scss'

interface ISideBarItem {
  label: string
  icon: ReactNode
}

export const SideBarItem: FC<ISideBarItem> = ({ label, icon }) => {
  return (
    <li className={styles.item}>
      <button className={styles.button}>
        {icon}

        <p className={styles.text}>{label}</p>
      </button>
    </li>
  )
}
