import { FC, useState } from 'react'

import { Flex } from '@/components/layout'

import { ChatTab } from '@/components/ui'

import styles from './chat-tabs.module.scss'

export const ChatTabs: FC = () => {
  const [tab, setTab] = useState<number>(0)

  return (
    <Flex align="center" className={styles.tabs}>
      <ChatTab tabIndex={0} currentTab={tab} setTab={setTab}>
        All messages
      </ChatTab>
      <ChatTab tabIndex={1} currentTab={tab} setTab={setTab}>
        Participants
      </ChatTab>
    </Flex>
  )
}
