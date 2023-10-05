import { FC, PropsWithChildren } from 'react'

import { Flex, SideBar } from '@/components/layout'

import styles from './page.module.scss'

export const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex className={styles.box}>
      <SideBar />

      {children}
    </Flex>
  )
}
