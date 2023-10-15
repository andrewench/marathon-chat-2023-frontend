import { FC, useEffect, useState } from 'react'

import { motion } from 'framer-motion'

import { TTypingPayload } from '@/shared/types'

import styles from './typing-label.module.scss'

export const TypingLabel: FC<{
  names: Omit<TTypingPayload, 'isTyping'>[]
}> = ({ names }) => {
  const [count, setCount] = useState<number>(1)

  const getFullName = ({
    firstName,
    lastName,
  }: Record<'firstName' | 'lastName', string>) =>
    [firstName, lastName].join(' ')

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>

    timer = setInterval(() => {
      setCount(value => value + 1)

      if (count > 2) setCount(1)
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [count])

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
      className={styles.typing}
    >
      {names.length < 2 ? (
        <>
          <span>{getFullName(names[0])}</span> is typing
          {'.'.repeat(count)}
        </>
      ) : (
        <>
          <span>{getFullName(names[0])}</span> and{' '}
          <span>{getFullName(names[1])}</span> is typing
          {'.'.repeat(count)}
        </>
      )}
    </motion.p>
  )
}
