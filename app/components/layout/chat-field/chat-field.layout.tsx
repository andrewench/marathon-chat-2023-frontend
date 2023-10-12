import EmojiPicker from 'emoji-picker-react'
import { Paperclip, Send, SmilePlus } from 'lucide-react'
import { ChangeEvent, FC, memo, useState } from 'react'

import cn from 'clsx'

import { Flex } from '@/components/layout'

import { StyledButton } from '@/components/ui'

import { useActions, useAppSelector } from '@/shared/hooks'

import { modals } from '@/store/slices'

import styles from './chat-field.module.scss'

export const ChatField: FC = memo(function ChatField() {
  const [isPickerOpen, setPickerOpen] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  const { setModalWindow } = useActions()

  const { upload } = useAppSelector(modals)

  const togglePicker = () => {
    isPickerOpen ? setPickerOpen(false) : setPickerOpen(true)
  }

  return (
    <Flex align="center" className={styles.inputBox}>
      {isPickerOpen && (
        <div className={styles.picker}>
          <EmojiPicker
            width={360}
            height={300}
            lazyLoadEmojis
            onEmojiClick={emoji => {
              setMessage(message => (message += emoji.emoji))
            }}
            previewConfig={{ showPreview: false }}
          />
        </div>
      )}

      <button
        onClick={togglePicker}
        className={cn(
          styles.button,
          {
            [styles.styled]: isPickerOpen,
          },
          styles.emodjiButton,
        )}
      >
        <SmilePlus size={20} strokeWidth={2} />
      </button>

      <button
        onClick={() => setModalWindow({ modal: 'upload', isOpen: true })}
        className={cn(styles.button, {
          [styles.styled]: upload.isOpen,
        })}
      >
        <Paperclip size={20} strokeWidth={2} />
      </button>

      <input
        value={message}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setMessage(event.target.value)
        }}
        placeholder="Enter something..."
        className={styles.input}
      />

      <StyledButton type="button" variant="filled" className={styles.submit}>
        <Send size={18} strokeWidth={2} className={styles.submitIcon} />
      </StyledButton>
    </Flex>
  )
})
