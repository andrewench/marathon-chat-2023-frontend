import EmojiPicker from 'emoji-picker-react'
import { Paperclip, Send, Smile } from 'lucide-react'
import { FC, memo, useState } from 'react'

import cn from 'clsx'

import { Flex } from '@/components/layout'

import { StyledButton } from '@/components/ui'

import styles from './chat-field.module.scss'

export const ChatField: FC = memo(function ChatField() {
  const [isPickerOpen, setPickerOpen] = useState<boolean>(false)

  const togglePicker = () => {
    isPickerOpen ? setPickerOpen(false) : setPickerOpen(true)
  }

  return (
    <Flex align="center" className={styles.inputBox}>
      {isPickerOpen && (
        <div className={styles.picker}>
          <EmojiPicker
            width={360}
            height={360}
            lazyLoadEmojis
            previewConfig={{ showPreview: false }}
          />
        </div>
      )}

      <button
        onClick={togglePicker}
        className={cn(styles.button, styles.emodjiButton)}
      >
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
  )
})
