import Image from 'next/image'

import { FC } from 'react'

import { Chat, Flex, Header } from '@/components/layout'

import styles from './content.module.scss'

export const Content: FC = () => {
  return (
    <div className={styles.box}>
      <Header />

      <Flex className={styles.content}>
        <div className={styles.lessonBox}>
          <div className={styles.player}>
            <Image
              src="/skype.jpg"
              alt="Skype"
              width={700}
              height={667}
              draggable={false}
              className={styles.skype}
            />
          </div>
        </div>

        <Chat />
      </Flex>
    </div>
  )
}
