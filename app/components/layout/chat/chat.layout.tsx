import { FC, useEffect, useState } from 'react'
import SimpleBar from 'simplebar-react'

import cn from 'clsx'
import { motion } from 'framer-motion'

import { ChatField, ChatTabs, Flex } from '@/components/layout'

import { SocketService } from '@/services'

import styles from './chat.module.scss'

export const Chat: FC = () => {
  const [messages, setMessages] = useState<string[]>([])

  const sendMessage = (message: string) => {
    setMessages([...messages, message])

    SocketService.emit('message', message)
  }

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

    SocketService.on('connect', handleConnect)
    SocketService.on('disconnect', handleDisconnect)
    SocketService.on('connect_error', handleConnectError)

    return () => {
      SocketService.off('connect', handleConnect)
      SocketService.off('disconnect', handleDisconnect)
      SocketService.off('connect_error', handleConnectError)
    }
  }, [])

  return (
    <Flex direction="column" className={cn('scroll-bar', styles.box)}>
      <div className={styles.innerBox}>
        <Flex direction="column" className={styles.chatBox}>
          <ChatTabs />

          <div className={styles.chat}>
            <SimpleBar className={styles.scrollBar}>
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
                    <p className={styles.emptyLabel}>No messages</p>
                  </Flex>
                )}

                {messages.map((item, idx) => (
                  <motion.div
                    initial={{ opacity: 0, translateY: 30 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={styles.myMessage}
                    key={idx}
                  >
                    {item}
                  </motion.div>
                ))}
              </Flex>
            </SimpleBar>
          </div>
        </Flex>
      </div>

      <ChatField onSubmit={sendMessage} />
    </Flex>
  )
}
