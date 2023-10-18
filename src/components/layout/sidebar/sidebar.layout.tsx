import Image from 'next/image'

import { AlignRight } from 'lucide-react'
import { FC, useRef } from 'react'

import cn from 'clsx'
import { animate, motion } from 'framer-motion'

import { Flex, ScrollBox, SideBarMenu } from '@/components/layout'

import { Avatar } from '@/components/shared'

import { useActions, useAppSelector } from '@/shared/hooks'

import { app, user } from '@/store/slices'

import styles from './sidebar.module.scss'

export const SideBar: FC = () => {
  const sideBarRef = useRef<HTMLDivElement>(null)

  const { setSideBar } = useActions()

  const { sideBar } = useAppSelector(app)

  const { data: userData } = useAppSelector(user)

  const clickHandler = () => {
    if (!sideBarRef.current) return

    if (sideBar.isOpen) {
      animate(
        sideBarRef.current,
        {
          width: 70,
        },
        {
          duration: 0.3,
        },
      )

      setSideBar(false)
    } else {
      animate(
        sideBarRef.current,
        {
          width: 262,
        },
        {
          duration: 0.3,
        },
      )

      setSideBar(true)
    }
  }

  return (
    <motion.div
      ref={sideBarRef}
      initial={{ width: 262 }}
      className={styles.box}
    >
      <div className={styles.stickyWrap}>
        <ScrollBox>
          <div
            className={cn(styles.innerBox, {
              [styles.minimized]: !sideBar.isOpen,
            })}
          >
            <div
              className={cn(styles.stickyBox, {
                [styles.minimized]: !sideBar.isOpen,
              })}
            >
              <Flex
                align="center"
                content="space-between"
                className={cn(styles.logoBox, {
                  [styles.minimized]: !sideBar.isOpen,
                })}
              >
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={27}
                  height={27}
                  draggable={false}
                  className={styles.logo}
                />

                <button className={styles.toggle} onClick={clickHandler}>
                  <AlignRight />
                </button>
              </Flex>

              <Flex direction="column" className={styles.avatarBox}>
                {sideBar.isOpen ? (
                  <Avatar variant="normal" />
                ) : (
                  <Avatar variant="mini" />
                )}
              </Flex>

              <div className={styles.divider} />

              <div
                className={cn(styles.meta, {
                  [styles.hide]: !sideBar.isOpen,
                })}
              >
                <h1 className={styles.username}>
                  {userData.firstName + ' ' + userData.lastName}
                </h1>
                <h2 className={styles.specialty}>
                  {userData.role &&
                    userData.role[0].toUpperCase() + userData.role.slice(1)}
                </h2>
              </div>
            </div>

            <SideBarMenu
              className={cn(styles.menu, {
                [styles.minimized]: !sideBar.isOpen,
              })}
            />
          </div>
        </ScrollBox>
      </div>
    </motion.div>
  )
}
