import { Paperclip, Send, Smile } from 'lucide-react'
import { FC } from 'react'
import SimpleBar from 'simplebar-react'

import cn from 'clsx'

import { Flex } from '@/components/layout'

import { MessageItem, StyledButton } from '@/components/ui'

import styles from './chat.module.scss'

export const Chat: FC = () => {
  return (
    <Flex direction="column" className={styles.box}>
      <div className={styles.innerBox}>
        <Flex direction="column" className={styles.chatBox}>
          <Flex className={styles.tabs}>
            <StyledButton variant="filled" className={styles.tab}>
              Message
            </StyledButton>
            <StyledButton variant="outline" className={styles.tab}>
              Participants
            </StyledButton>
          </Flex>

          <div className={styles.chat}>
            <SimpleBar className={styles.scrollBar}>
              <div className={styles.chatList}>
                <MessageItem>Hello. How are you?</MessageItem>
                <MessageItem>
                  We have lake-front vaction rentals. No specific liability.
                </MessageItem>
                <MessageItem>
                  We have lake-front vaction rentals. No specific liability.
                </MessageItem>
                <MessageItem>Hello. How are you?</MessageItem>
                <MessageItem>
                  We have lake-front vaction rentals. No specific liability.
                </MessageItem>
                <MessageItem>
                  We have lake-front vaction rentals. No specific liability.
                </MessageItem>
                <MessageItem>Hello. How are you?</MessageItem>
                <MessageItem>
                  We have lake-front vaction rentals. No specific liability.
                </MessageItem>
                <MessageItem>
                  We have lake-front vaction rentals. No specific liability.
                </MessageItem>

                <div className={styles.myMessage}>
                  We have lake-front vaction rentals. No specific liability.
                </div>
              </div>
            </SimpleBar>
          </div>
        </Flex>
      </div>

      <Flex align="center" className={styles.inputBox}>
        <button className={cn(styles.button, styles.emodjiButton)}>
          <Smile size={20} strokeWidth={2} />
        </button>

        <button className={styles.button}>
          <Paperclip size={20} strokeWidth={2} />
        </button>

        <input placeholder="Enter something..." className={styles.input} />

        <StyledButton variant="filled" className={styles.submit}>
          <Send size={18} strokeWidth={2} className={styles.submitIcon} />
        </StyledButton>
      </Flex>
    </Flex>
  )
}
