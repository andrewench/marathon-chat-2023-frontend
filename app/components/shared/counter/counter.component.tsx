import { FC } from 'react'

import styles from './counter.module.scss'

export const Counter: FC<{ value: number }> = ({ value }) => {
  return <p className={styles.text}>{value}</p>
}
