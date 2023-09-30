import Link from 'next/link'

import { Plus, Search, UserX, Users2 } from 'lucide-react'
import { FC } from 'react'

import { Flex } from '@/components/layout'

import { Counter } from '@/components/shared'

import styles from './header.module.scss'

export const Header: FC = () => {
  return (
    <header className={styles.box}>
      <Flex align="center" content="space-between">
        <Flex align="center" content="space-between" className={styles.left}>
          <Flex align="center" className={styles.links}>
            <Flex align="center" className={styles.inviteGroup}>
              <Users2 size={24} strokeWidth={2} />
              <Link href="/">Invited to the class</Link>
              <Counter value={52} />
            </Flex>

            <Flex align="center" className={styles.absentPeople}>
              <UserX size={22} strokeWidth={2} />
              <Link href="/">Absent people</Link>
              <Counter value={52} />
            </Flex>
          </Flex>

          <button className={styles.addPeople}>
            <Plus size={20} strokeWidth={2} />
            Add people
          </button>
        </Flex>

        <Flex align="center" className={styles.searchBarBox}>
          <Search size={24} strokeWidth={2} className={styles.searchIcon} />
          <input placeholder="Search..." className={styles.searchBar} />
        </Flex>
      </Flex>
    </header>
  )
}
