import { FC } from 'react'

import styles from './chat.module.scss'

export const Chat: FC = () => {
  return (
    <section className={styles.box}>
      <div className={styles.innerBox}>
        <div className={styles.chatBox}>Chat Block</div>
      </div>
    </section>
  )
}
