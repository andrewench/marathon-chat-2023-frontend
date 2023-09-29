import { Paperclip, Send, Smile } from 'lucide-react'
import { FC } from 'react'

import cn from 'clsx'

import { Flex } from '@/components/layout'

import { StyledButton } from '@/components/ui'

import styles from './chat.module.scss'

export const Chat: FC = () => {
  return (
    <Flex direction="column" className={styles.box}>
      <div className={styles.innerBox}>
        <div className={styles.chatBox}>
          <Flex className={styles.tabs}>
            <StyledButton variant="filled" className={styles.tab}>
              Message
            </StyledButton>
            <StyledButton variant="outline" className={styles.tab}>
              Participants
            </StyledButton>
          </Flex>
        </div>
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
