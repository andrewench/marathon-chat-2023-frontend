import Link from 'next/link'

import { Plus, Search, UserX, Users2 } from 'lucide-react'
import { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react'

import cn from 'clsx'
import { motion } from 'framer-motion'

import { Flex } from '@/components/layout'

import { Counter } from '@/components/shared'

import styles from './header.module.scss'

interface IHeader {
  isOverlay: boolean | undefined
  setOverlay: Dispatch<SetStateAction<boolean | undefined>>
}

export const Header: FC<IHeader> = ({ isOverlay, setOverlay }) => {
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 0) {
        setOverlay(true)
      } else {
        setOverlay(false)
      }
    }

    document.addEventListener('scroll', scrollHandler)

    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [isOverlay, setOverlay])

  return (
    <div
      ref={headerRef}
      className={cn(styles.wrap, {
        [styles.overlay]: isOverlay,
      })}
    >
      <header
        className={cn(styles.box, {
          [styles.minimized]: isOverlay,
        })}
      >
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

            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className={styles.addPeople}
            >
              <Plus size={20} strokeWidth={2} />
              Add people
            </motion.button>
          </Flex>

          <Flex align="center" className={styles.searchBarBox}>
            <Search size={24} strokeWidth={2} className={styles.searchIcon} />
            <input placeholder="Search..." className={styles.searchBar} />
          </Flex>
        </Flex>
      </header>
    </div>
  )
}
