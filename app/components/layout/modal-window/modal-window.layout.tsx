import { FC, useEffect, useRef } from 'react'

import cn from 'clsx'
import { motion } from 'framer-motion'

import { Heading } from '@/components/shared'

import { useOutside } from '@/shared/hooks'

import { PropsWithClassNameAndChildren } from '@/shared/types'

import styles from './modal-window.module.scss'

interface IModalWindow {
  title: string
  onClose: () => void
}

export const ModalWindow: FC<PropsWithClassNameAndChildren<IModalWindow>> = ({
  title,
  onClose,
  children,
  className,
}) => {
  const wrapRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  useOutside(wrapRef, modalRef, () => onClose())

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = '4px'

    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      ref={wrapRef}
      className={styles.backdrop}
    >
      <motion.div
        initial={{ translateY: 100, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        exit={{ translateY: -100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        ref={modalRef}
        className={cn(styles.window, className)}
      >
        <Heading as="h1" className={styles.title}>
          {title}
        </Heading>

        {children}
      </motion.div>
    </motion.div>
  )
}
