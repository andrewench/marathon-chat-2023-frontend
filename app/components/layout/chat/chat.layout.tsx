import { FC, useEffect, useRef, useState } from 'react'
import SimpleBar from 'simplebar-react'

import cn from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import { ChatField, ChatTabs, Flex } from '@/components/layout'

import { TypingLabel } from '@/components/shared'

import { MessageItem } from '@/components/ui'

import { SocketService } from '@/services'

import { useAppSelector } from '@/shared/hooks'

import { TMessagePayload, TTypingPayload } from '@/shared/types'

import { user } from '@/store/slices'

import styles from './chat.module.scss'

export const Chat: FC = () => {
  const [userNames, setUserNames] = useState<
    Omit<TTypingPayload, 'isTyping'>[]
  >([])
  const [messages, setMessages] = useState<TMessagePayload[]>([])

  const { data: userData } = useAppSelector(user)

  const scrollBarRef = useRef(null)

  const sendMessage = (payload: TMessagePayload) => {
    SocketService.emit('message', payload)
  }

  useEffect(() => {
    if (!scrollBarRef.current) return

    const typedRef = scrollBarRef.current as {
      contentWrapperEl: HTMLDivElement
    }

    const scrollableWrap = typedRef.contentWrapperEl

    scrollableWrap.scrollTo(0, scrollableWrap.scrollHeight)
  }, [messages.length])

  useEffect(() => {
    const handleConnect = () => {
      console.log('[socket]: connected')
    }

    const handleDisconnect = () => {
      console.log('[socket]: disconnected')
    }

    const handleConnectError = () => {
      console.log('some error')
    }

    SocketService.on('message', (payload: TMessagePayload) => {
      setMessages([...messages, payload])
    })

    SocketService.on(
      'typing',
      ({ id, firstName, lastName, isTyping }: TTypingPayload) => {
        if (isTyping) {
          const isUserExists = userNames.some(user => user.id === id)

          if (!isUserExists) {
            setUserNames([
              ...userNames,
              {
                id,
                firstName,
                lastName,
              },
            ])
          }
        } else {
          const filteredNames = userNames.filter(user => user.id !== id)

          setUserNames(filteredNames)
        }
      },
    )

    SocketService.on('connect', handleConnect)
    SocketService.on('disconnect', handleDisconnect)
    SocketService.on('connect_error', handleConnectError)

    return () => {
      SocketService.off('connect', handleConnect)
      SocketService.off('disconnect', handleDisconnect)
      SocketService.off('connect_error', handleConnectError)
    }
  }, [messages, userNames])

  return (
    <Flex direction="column" className={cn('scroll-bar', styles.box)}>
      <div className={styles.innerBox}>
        <Flex direction="column" className={styles.chatBox}>
          <ChatTabs />

          <div className={styles.chat}>
            <SimpleBar ref={scrollBarRef} className={styles.scrollBar}>
              <Flex
                direction="column"
                className={cn(styles.chatList, {
                  [styles.emptyList]: !Boolean(messages.length),
                })}
              >
                {!Boolean(messages.length) && (
                  <Flex
                    align="center"
                    content="center"
                    className={styles.emptyBox}
                  >
                    <p className={styles.emptyLabel}>No messages yet</p>
                  </Flex>
                )}

                {messages.map((message, idx) => {
                  return message.id === userData.id ? (
                    <motion.div
                      initial={{ opacity: 0, translateY: 30 }}
                      animate={{ translateY: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className={styles.myMessage}
                      key={idx}
                    >
                      {message.text}
                    </motion.div>
                  ) : (
                    <MessageItem
                      user={{
                        name: `${message.firstName} ${message.lastName}`,
                        avatar: message.avatar,
                      }}
                      key={idx}
                    >
                      {message.text}
                    </MessageItem>
                  )
                })}
              </Flex>
            </SimpleBar>
          </div>

          <AnimatePresence>
            {Boolean(userNames.length) &&
              !userNames.some(user => user.id === userData.id) && (
                <TypingLabel names={userNames} />
              )}
          </AnimatePresence>
        </Flex>
      </div>

      <ChatField onSubmit={sendMessage} />
    </Flex>
  )
}
