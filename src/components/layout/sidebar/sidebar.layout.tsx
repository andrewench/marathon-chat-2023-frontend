import Image from 'next/image'

import { AlignRight } from 'lucide-react'
import { FC } from 'react'

import { Flex, ScrollBox, SideBarMenu } from '@/components/layout'

import {
  HexagonBackdropIcon,
  HexagonMaskIcon,
  HexagonOutlineIcon,
} from '@/components/icons'

import { useActions } from '@/shared/hooks'

import styles from './sidebar.module.scss'

export const SideBar: FC = () => {
  const { toggleSideBar } = useActions()

  return (
    <ScrollBox>
      <div className={styles.box}>
        <div className={styles.stickyBox}>
          <Flex content="space-between">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={27}
              height={27}
              draggable={false}
            />

            <button className={styles.toggle} onClick={() => toggleSideBar()}>
              <AlignRight />
            </button>
          </Flex>

          <Flex direction="column" className={styles.avatarBox}>
            <div className={styles.avatarBorders}>
              <HexagonBackdropIcon dataRole="hexagon-backdrop" />
              <HexagonBackdropIcon dataRole="hexagon-backdrop-rotate" />

              <HexagonOutlineIcon dataRole="hexagon-icon-outline" />
            </div>

            <div className={styles.avatar}>
              <HexagonMaskIcon id="avatar-hexagon-mask" />

              <Image
                src="/avatar.png"
                alt="Avatar"
                fill
                quality={100}
                priority={true}
                draggable={false}
              />
            </div>
          </Flex>

          <div className={styles.divider}></div>

          <h1 className={styles.username}>Haris Ahmed</h1>
          <h2 className={styles.specialty}>Assistant professor</h2>
        </div>

        <SideBarMenu className={styles.menu} />
      </div>
    </ScrollBox>
  )
}
