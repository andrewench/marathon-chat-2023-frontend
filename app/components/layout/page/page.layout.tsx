import { FC, PropsWithChildren, useEffect } from 'react'

import { Flex, SideBar } from '@/components/layout'

import { useActions } from '@/shared/hooks'

import { useGetMeQuery } from '@/store/api'

import styles from './page.module.scss'

export const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  const { data } = useGetMeQuery(null)

  const { setUserData } = useActions()

  useEffect(() => {
    if (!data) return

    setUserData(data)
  }, [data, setUserData])

  return (
    <Flex className={styles.box}>
      <SideBar />

      {children}
    </Flex>
  )
}
