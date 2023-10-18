import { FC, ReactNode } from 'react'

import cn from 'clsx'
import { motion } from 'framer-motion'

import { useAppSelector } from '@/shared/hooks'

import { app } from '@/store/slices'

import styles from './sidebar-item.module.scss'

interface ISideBarItem {
  label: string
  icon: ReactNode
  onClick?: () => void
}

export const SideBarItem: FC<ISideBarItem> = ({ label, icon, onClick }) => {
  const { sideBar } = useAppSelector(app)

  return (
    <li className={styles.item}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        onClick={onClick}
        className={cn(styles.button, {
          [styles.minimized]: !sideBar.isOpen,
        })}
      >
        {icon}

        {sideBar.isOpen && <p className={styles.text}>{label}</p>}
      </motion.button>
    </li>
  )
}
