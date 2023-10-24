import { useRouter } from 'next/navigation'

import { Frown } from 'lucide-react'
import { FC, useEffect, useRef, useState } from 'react'
import SimpleBar from 'simplebar-react'

import cn from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import { ChatField, ChatLayout, ChatTabs, Flex } from '@/components/layout'

import { TypingLabel } from '@/components/shared'

import { MessageItem } from '@/components/ui'

import { SocketService } from '@/services'

import { useActions, useAppSelector } from '@/shared/hooks'

import { TErrorResponse, TMessagePayload, TTypingPayload } from '@/shared/types'

import { useGetRoomByIdMutation } from '@/store/api'

import { user } from '@/store/slices'

import styles from './chat-room.module.scss'

type TMessage = {
  type: 'message' | 'join'
  message: TMessagePayload
}

interface IChatRoom {
  roomId: string
}

export const ChatRoom: FC<IChatRoom> = ({ roomId }) => {
  const [userNames, setUserNames] = useState<
    Omit<TTypingPayload, 'isTyping'>[]
  >([])
  const [messages, setMessages] = useState<TMessage[]>([])
  const [isFetched, setFetched] = useState<boolean>(false)

  const router = useRouter()

  const { data: userData, room } = useAppSelector(user)

  const { setRoomData } = useActions()

  const [getRoom, { data: roomData, error: roomError }] =
    useGetRoomByIdMutation()

  const scrollBarRef = useRef(null)

  const sendMessage = (payload: TMessagePayload) => {
    SocketService.emit('message', payload)
  }

  useEffect(() => {
    if (room.roomId) return
    if (isFetched) return
    if (!userData.id) return

    getRoom({
      roomId,
      userId: userData.id,
    })

    setFetched(true)
  }, [getRoom, isFetched, room.roomId, roomId, userData.id])

  useEffect(() => {
    if (!roomData) return

    setRoomData({
      roomId: roomData.roomId,
      userId: userData.id,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomData, roomId, userData.id])

  useEffect(() => {
    if (!roomError) return

    const { data } = roomError as TErrorResponse

    if (data.error === 'CHAT_LOGOUT' || data.error === 'NO_ROOM') {
      router.push('/classroom')
    }
  }, [roomError, router])

  useEffect(() => {
    if (SocketService.connected) return
    SocketService.connect()
    return () => {
      SocketService.disconnect()
    }
  }, [])

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
      SocketService.emit('join', {
        id: userData.id,
        firstName: userData.firstName,
        lastName: userData.lastName,
      })
    }

    const handleDisconnect = () => {
      console.log('[socket]: disconnected')
    }

    SocketService.on('message', (message: TMessagePayload) => {
      setMessages([
        ...messages,
        {
          type: 'message',
          message,
        },
      ])
    })

    SocketService.on('join', message => {
      setMessages([
        ...messages,
        {
          type: 'join',
          message,
        },
      ])
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

    return () => {
      SocketService.off('connect', handleConnect)
      SocketService.off('disconnect', handleDisconnect)
    }
  }, [messages, userData.firstName, userData.id, userData.lastName, userNames])

  return (
    <ChatLayout
      classNames={{
        box: cn('scroll-bar', styles.box),
        innerBox: styles.innerBox,
        chatBox: styles.chatBox,
      }}
      slots={{
        box: <ChatField onSubmit={sendMessage} />,
      }}
    >
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
                direction="column"
                align="center"
                content="center"
                className={styles.emptyBox}
              >
                <p className={styles.emptyLabel}>
                  No messages yet{' '}
                  <Frown
                    size={24}
                    strokeWidth={2}
                    className={styles.frownIcon}
                  />
                </p>
              </Flex>
            )}

            {messages.map(({ type, message }, idx) => {
              switch (type) {
                case 'message':
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

                case 'join':
                  return (
                    <div key={idx} className={styles.joinMessageBox}>
                      <motion.div
                        initial={{ opacity: 0, translateY: 30 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className={styles.joinMessage}
                        key={idx}
                      >
                        <span>{`${message.firstName} ${message.lastName}`}</span>{' '}
                        joined the chat
                      </motion.div>
                    </div>
                  )
              }
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
    </ChatLayout>
  )
}
