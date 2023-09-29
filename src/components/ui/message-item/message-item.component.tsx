import Image from 'next/image'

import { FC } from 'react'

import { Flex } from '@/components/layout'

import styles from './message-item.module.scss'

export const MessageItem: FC<{ children: string }> = ({ children }) => {
  return (
    <Flex className={styles.box}>
      <Image
        src="/user_1.png"
        alt="User Avatar"
        width={40}
        height={40}
        draggable={false}
      />

      <p className={styles.message}>{children}</p>
    </Flex>
  )
}
