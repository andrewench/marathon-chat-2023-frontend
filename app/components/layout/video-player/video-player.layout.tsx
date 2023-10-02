import Image from 'next/image'

import { Cast, Maximize, Mic, PhoneOff, Video } from 'lucide-react'
import { FC } from 'react'

import { Flex } from '@/components/layout'

import { ControlButton } from '@/components/ui'

import styles from './video-player.module.scss'

export const VideoPlayer: FC = () => {
  return (
    <div className={styles.player}>
      <Image
        src="/skype.jpg"
        alt="Skype"
        width={690}
        height={667}
        draggable={false}
        className={styles.skype}
      />

      <Flex align="center" content="center" className={styles.controls}>
        <ControlButton
          icon={<Maximize size={18} strokeWidth={2} />}
          variant="secondary"
        />
        <ControlButton
          icon={<Mic size={18} strokeWidth={2} />}
          variant="secondary"
        />
        <ControlButton
          icon={<PhoneOff size={24} strokeWidth={2} />}
          variant="primary"
        />
        <ControlButton
          icon={<Video size={18} strokeWidth={2} />}
          variant="secondary"
        />
        <ControlButton
          icon={<Cast size={18} strokeWidth={2} />}
          variant="secondary"
        />
      </Flex>
    </div>
  )
}
