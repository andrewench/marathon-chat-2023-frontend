import EmojiPicker from 'emoji-picker-react'
import { Paperclip, Send, SmilePlus } from 'lucide-react'
import { ChangeEvent, FC, FormEvent, memo, useState } from 'react'

import cn from 'clsx'

import { StyledButton } from '@/components/ui'

import { useActions, useAppSelector } from '@/shared/hooks'

import { modals } from '@/store/slices'

import styles from './chat-field.module.scss'

interface IChatField {
  onSubmit?: (message: string) => void
}

export const ChatField: FC<IChatField> = memo(function ChatField({ onSubmit }) {
  const [message, setMessage] = useState<string>('')

  const [isPickerOpen, setPickerOpen] = useState<boolean>(false)

  const { setModalWindow } = useActions()

  const { upload } = useAppSelector(modals)

  const togglePicker = () => {
    isPickerOpen ? setPickerOpen(false) : setPickerOpen(true)
  }

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!message.length) return

    if (onSubmit) {
      onSubmit(message)

      setMessage('')
    }
  }

  return (
    <div className={styles.inputBox}>
      <form noValidate onSubmit={onSubmitHandler} className={styles.form}>
        {isPickerOpen && (
          <div className={styles.picker}>
            <EmojiPicker
              width={360}
              height={300}
              lazyLoadEmojis
              onEmojiClick={({ emoji }) => {
                setMessage(message => (message += emoji))
              }}
              previewConfig={{ showPreview: false }}
            />
          </div>
        )}

        <button
          type="button"
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
          type="button"
          onClick={() => setModalWindow({ modal: 'upload', isOpen: true })}
          className={cn(styles.button, {
            [styles.styled]: upload.isOpen,
          })}
        >
          <Paperclip size={20} strokeWidth={2} />
        </button>

        <input
          value={message}
          autoComplete="off"
          placeholder="Enter something..."
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setMessage(event.target.value)
          }
          className={styles.input}
        />

        <StyledButton type="submit" variant="filled" className={styles.submit}>
          <Send size={18} strokeWidth={2} className={styles.submitIcon} />
        </StyledButton>
      </form>
    </div>
  )
})
