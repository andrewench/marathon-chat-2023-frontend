import EmojiPicker from 'emoji-picker-react'
import { Paperclip, Send, SmilePlus } from 'lucide-react'
import {
  ChangeEvent,
  FC,
  FormEvent,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

import cn from 'clsx'

import { StyledButton } from '@/components/ui'

import { SocketService } from '@/services'

import { useActions, useAppSelector, useDebounce } from '@/shared/hooks'

import { TMessagePayload } from '@/shared/types'

import { modals, user } from '@/store/slices'

import styles from './chat-field.module.scss'

interface IChatField {
  onSubmit?: (payload: TMessagePayload) => void
}

export const ChatField: FC<IChatField> = memo(function ChatField({ onSubmit }) {
  const [message, setMessage] = useState<string>('')
  const [isTyping, setTyping] = useState<boolean>(false)

  const { data: userData } = useAppSelector(user)

  const [isPickerOpen, setPickerOpen] = useState<boolean>(false)

  const { setModalWindow } = useActions()

  const { attach } = useAppSelector(modals)

  const cancelTyping = () => {
    console.log('debounced')

    SocketService.emit('typing', {
      id: userData.id,
      firstName: userData.firstName,
      lastName: userData.lastName,
      isTyping: false,
    })

    setTyping(false)
  }

  const debouncedTyping = useDebounce(() => {
    cancelTyping()

    console.log('debounced')
  }, 5000)

  const togglePicker = () => {
    isPickerOpen ? setPickerOpen(false) : setPickerOpen(true)
  }

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!message.length) return

    if (onSubmit) {
      onSubmit({
        id: userData.id,
        text: message,
        firstName: userData.firstName,
        lastName: userData.lastName,
      })

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
          onClick={() => setModalWindow({ modal: 'attach', isOpen: true })}
          className={cn(styles.button, {
            [styles.styled]: attach.isOpen,
          })}
        >
          <Paperclip size={20} strokeWidth={2} />
        </button>

        <input
          value={message}
          autoComplete="off"
          placeholder="Enter something..."
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setMessage(event.target.value)

            if (!isTyping) {
              SocketService.emit('typing', {
                id: userData.id,
                firstName: userData.firstName,
                lastName: userData.lastName,
                isTyping: true,
              })

              debouncedTyping()
              setTyping(true)
            }
          }}
          className={styles.input}
        />

        <StyledButton type="submit" variant="filled" className={styles.submit}>
          <Send size={18} strokeWidth={2} className={styles.submitIcon} />
        </StyledButton>
      </form>
    </div>
  )
})
