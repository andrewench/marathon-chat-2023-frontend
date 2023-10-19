import { Plus } from 'lucide-react'
import { FC } from 'react'

import { ChatLayout, Flex } from '@/components/layout'

import { useActions } from '@/shared/hooks'

import styles from './chat-backdrop.module.scss'

export const ChatBackdrop: FC = () => {
  const { setModalWindow } = useActions()

  return (
    <ChatLayout
      classNames={{
        innerBox: styles.innerBox,
      }}
    >
      <Flex
        direction="column"
        align="center"
        content="center"
        className={styles.emptyBox}
      >
        <p className={styles.emptyLabel}>
          You haven&apos;t been invited to the chat yet
        </p>

        <button
          onClick={() =>
            setModalWindow({
              modal: 'joinChat',
              isOpen: true,
            })
          }
          className={styles.join}
        >
          <Plus size={17} />
          Join chat
        </button>
      </Flex>
    </ChatLayout>
  )
}
