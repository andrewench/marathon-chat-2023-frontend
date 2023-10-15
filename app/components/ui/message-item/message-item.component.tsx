import Image from 'next/image'

import { FC, PropsWithChildren } from 'react'

import { motion } from 'framer-motion'

import styles from './message-item.module.scss'

interface IMessageItem {
  user: {
    name: string
  }
}

export const MessageItem: FC<PropsWithChildren<IMessageItem>> = ({
  user,
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 30 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={styles.box}
    >
      <Image
        src="/user_1.png"
        alt="User Avatar"
        width={40}
        height={40}
        draggable={false}
        className={styles.avatar}
      />

      <div className={styles.message}>
        <p className={styles.username}>{user.name}</p>
        <p className={styles.text}>{children}</p>
        <span className={styles.timestamp}>10h ago</span>
      </div>
    </motion.div>
  )
}
