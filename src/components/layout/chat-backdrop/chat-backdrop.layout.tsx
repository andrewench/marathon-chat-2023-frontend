import { Plus } from 'lucide-react'
import { FC } from 'react'

import { ChatLayout, Flex } from '@/components/layout'

import styles from './chat-backdrop.module.scss'

export const ChatBackdrop: FC = () => {
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

        <button className={styles.join}>
          <Plus size={17} />
          Join chat
        </button>
      </Flex>
    </ChatLayout>
  )

  // return (
  //   <div className={styles.box}>
  //     <div className={styles.innerBox}>
  //       <div className={styles.chatBox}>
  //         <Flex
  //           direction="column"
  //           align="center"
  //           content="center"
  //           className={styles.emptyBox}
  //         >
  //           <p className={styles.emptyLabel}>
  //             You haven&apos;t been invited to the chat yet
  //           </p>

  //           <button className={styles.join}>
  //             <Plus size={17} />
  //             Join chat
  //           </button>
  //         </Flex>
  //       </div>
  //     </div>
  //   </div>
  // )
}
