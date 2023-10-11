import { FC } from 'react'
import SimpleBar from 'simplebar-react'

import cn from 'clsx'

import { ChatField, ChatTabs, Flex } from '@/components/layout'

import { MessageItem } from '@/components/ui'

import styles from './chat.module.scss'

export const Chat: FC = () => {
  return (
    <Flex direction="column" className={cn('scroll-bar', styles.box)}>
      <div className={styles.innerBox}>
        <Flex direction="column" className={styles.chatBox}>
          <ChatTabs />

          <div className={styles.chat}>
            <SimpleBar className={styles.scrollBar}>
              <div className={styles.chatList}>
                <MessageItem>Hello. How are you?</MessageItem>
                <MessageItem>
                  We have lake-front vaction rentals. No specific liability. We
                  have lake-front vaction rentals. No specific liability. We
                  have lake-front vaction rentals. No specific liability. We
                  have lake-front vaction rentals. No specific liability. We
                  have lake-front vaction rentals. No specific liability. We
                  have lake-front vaction rentals. No specific liability.
                </MessageItem>
                <MessageItem>Hello. How are you?</MessageItem>
                <MessageItem>
                  We have lake-front vaction rentals. No specific liability. We
                  have lake-front vaction rentals. No specific liability. We
                  have lake-front vaction rentals. No specific liability. We
                  have lake-front vaction rentals. No specific liability. We
                  have lake-front vaction rentals. No specific liability. We
                  have lake-front vaction rentals. No specific liability.
                </MessageItem>
                <MessageItem>
                  We have lake-front vaction rentals. No specific liability. We
                  have lake-front vaction rentals. No specific liability. We
                  have lake-front vaction rentals. No specific liability. We
                  have lake-front vaction rentals. No specific liability. We
                  have lake-front vaction rentals. No specific liability. We
                  have lake-front vaction rentals. No specific liability.
                </MessageItem>

                <div className={styles.myMessage}>
                  We have lake-front vaction rentals. No specific liability.
                </div>
              </div>
            </SimpleBar>
          </div>
        </Flex>
      </div>

      <ChatField />
    </Flex>
  )
}
