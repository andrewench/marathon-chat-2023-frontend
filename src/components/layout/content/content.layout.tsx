import { useSearchParams } from 'next/navigation'

import { Share2 } from 'lucide-react'
import { FC, useEffect, useState } from 'react'

import { useAnimate } from 'framer-motion'

import {
  ChatBackdrop,
  ChatRoom,
  Flex,
  Header,
  VideoPlayer,
} from '@/components/layout'

import { Divider, Heading } from '@/components/shared'

import { StyledGradientMaskIcon } from '@/components/icons'

import { AppConstant } from '@/shared/constants'

import styles from './content.module.scss'

export const Content: FC = () => {
  const [isOverlay, setOverlay] = useState<boolean>()

  const params = useSearchParams()

  const [contentRef, animate] = useAnimate<HTMLDivElement>()

  useEffect(() => {
    if (isOverlay === undefined) return

    if (isOverlay) {
      animate(
        contentRef.current,
        {
          transform: ['translateY(0px)', 'translateY(30px)', 'translateY(0)'],
        },
        { duration: 0.3 },
      )
    } else {
      animate(
        contentRef.current,
        {
          transform: ['translateY(0px)', 'translateY(30px)', 'translateY(0)'],
        },
        { duration: 0.3 },
      )
    }
  }, [animate, contentRef, isOverlay])

  return (
    <div className={styles.box}>
      <Header isOverlay={isOverlay} setOverlay={setOverlay} />

      <Flex content="space-between" className={styles.content}>
        <div className={styles.lessonBox} ref={contentRef}>
          <VideoPlayer />

          <Flex align="center" content="space-between">
            <Heading as="h1" className={styles.articleTitle}>
              The Bussiness of Illustration and Lettering
            </Heading>

            <button className={styles.share}>
              <StyledGradientMaskIcon id="styled-gradient" />
              <Share2 size={20} strokeWidth={1} className={styles.shareIcon} />
              Share
            </button>
          </Flex>

          <h3 className={styles.subHeading}>
            <span className={styles.description}>Chapter 5</span> - Basic letter
            drawing
          </h3>

          <Divider variant="medium" marginY={10} />

          <Heading as="h3" variant="styled" className={styles.heading}>
            Overview
          </Heading>

          <p className={styles.description}>
            Nurture yourself while you practice your drawing skills with two
            distinct and meditative techniques. One-line drawing in trendy, but
            it is way to break down hapes two distinct and meditative
            techniques. One-line while you practice your drawing skills with
            two... <span>More</span>
          </p>

          <Heading as="h3" variant="styled" className={styles.heading}>
            Overview
          </Heading>

          <p className={styles.description}>
            Nurture yourself while you practice your drawing skills with two
            distinct and meditative techniques. One-line drawing in trendy, but
            it is way to break down hapes two distinct and meditative
            techniques. One-line while you practice your drawing skills with
            two... <span>More</span>
          </p>

          <Heading as="h3" variant="styled" className={styles.heading}>
            Overview
          </Heading>

          <p className={styles.description}>
            Nurture yourself while you practice your drawing skills with two
            distinct and meditative techniques. One-line drawing in trendy, but
            it is way to break down hapes two distinct and meditative
            techniques. One-line while you practice your drawing skills with
            two... <span>More</span>
          </p>
        </div>

        <div className={styles.chatBox}>
          {params.get(AppConstant.params.chat.queries.room.key) ? (
            <ChatRoom />
          ) : (
            <ChatBackdrop />
          )}
        </div>
      </Flex>
    </div>
  )
}
