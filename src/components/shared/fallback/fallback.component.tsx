import { FC, useEffect } from 'react'

import { motion } from 'framer-motion'

import styles from './fallback.module.scss'

export const Fallback: FC = () => {
  useEffect(() => {
    return () => {
      document.body.style.position = 'unset'
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className={styles.box}
    />
  )
}
