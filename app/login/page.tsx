'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { FC, useEffect } from 'react'

import cn from 'clsx'
import { motion } from 'framer-motion'

import { Flex, LoginForm, SignUpForm } from '@/components/layout'

import { Heading } from '@/components/shared'

import { MainProvider } from '@/components/providers'

import { AppConfig } from '@/shared/config'

import { createQueryString } from '@/shared/utils'

import styles from './login.module.scss'

const Main: FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()

  const {
    login: { queries },
  } = AppConfig

  const actQuery = params.get(queries.act.key)

  useEffect(() => {
    const { path } = createQueryString(pathname, [
      {
        key: queries.act.key,
        value: queries.act.defaultValue,
      },
    ])

    if (!actQuery || !queries.act.resolvedValues.includes(actQuery)) {
      router.replace(path)
    }
  }, [
    actQuery,
    params,
    pathname,
    queries.act.defaultValue,
    queries.act.key,
    queries.act.resolvedValues,
    router,
  ])

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
              onClick={() => {
                router.replace(pathname + '?' + 'act=sign_in', {
                  scroll: false,
                })
              }}
              className={cn(styles.tab, {
                [styles.active]: actQuery === 'sign_in',
              })}
            >
              Sign In
            </button>
            <button
              onClick={() => {
                router.replace(pathname + '?' + 'act=sign_up', {
                  scroll: false,
                })
              }}
              className={cn(styles.tab, {
                [styles.active]: actQuery === 'sign_up',
              })}
            >
              Sign Up
            </button>
          </div>

          {(!actQuery || actQuery === 'sign_in') && (
            <motion.div
              initial={{ translateY: 30 }}
              animate={{ translateY: 0 }}
              transition={{ duration: 0.3 }}
            >
              <LoginForm />
            </motion.div>
          )}

          {actQuery === 'sign_up' && (
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
