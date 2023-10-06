'use client'

import { useState } from 'react'

import cn from 'clsx'
import { motion } from 'framer-motion'

import { Flex, LoginForm, SignUpForm } from '@/components/layout'

import { Heading } from '@/components/shared'

import { MainProvider } from '@/components/providers'

import styles from './page.module.scss'

const Main = () => {
  const [tab, setTab] = useState<number>(0)

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
            <button
              className={cn(styles.tab, {
                [styles.active]: !tab,
              })}
              onClick={() => setTab(0)}
            >
              Sign In
            </button>
            <button
              className={cn(styles.tab, {
                [styles.active]: tab === 1,
              })}
              onClick={() => {
                setTab(1)
              }}
            >
              Sign Up
            </button>
          </div>

          {tab === 0 && (
            <motion.div
              initial={{ translateY: 30 }}
              animate={{ translateY: 0 }}
              transition={{ duration: 0.3 }}
            >
              <LoginForm />
            </motion.div>
          )}

          {tab === 1 && (
            <motion.div
              initial={{ translateY: 30 }}
              animate={{ translateY: 0 }}
              transition={{ duration: 0.3 }}
            >
              <SignUpForm />
            </motion.div>
          )}
        </motion.div>
      </Flex>
    </MainProvider>
  )
}

export default Main
