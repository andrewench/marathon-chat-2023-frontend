import { FC } from 'react'

import { Content, Flex, SideBar } from '@/components/layout'

import styles from './page.module.scss'

export const PageLayout: FC = () => {
  return (
    <Flex className={styles.box}>
      <SideBar />
      <Content />
    </Flex>
  )
}
