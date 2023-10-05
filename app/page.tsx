'use client'

import cn from 'clsx'
import { motion } from 'framer-motion'

import { Flex, LoginForm } from '@/components/layout'

import { Heading } from '@/components/shared'

import { MainProvider } from '@/components/providers'

import styles from './page.module.scss'

const Main = () => {
  return (
    <MainProvider>
      <Flex
        direction="column"
        align="center"
        content="center"
        className={styles.wrap}
      >
        <motion.div
          initial={{ translateY: 100, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={styles.box}
        >
          <Heading as="h1" className={styles.title}>
            Marathon Chat
          </Heading>

          <div className={styles.tabs}>
            <button className={cn(styles.tab, styles.active)}>Sign In</button>
            <button className={styles.tab}>Sign Up</button>
          </div>

          <LoginForm />
        </motion.div>
      </Flex>
    </MainProvider>
  )
}

export default Main
