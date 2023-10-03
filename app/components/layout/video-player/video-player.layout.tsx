import {
  Cast,
  Maximize,
  Mic,
  MicOff,
  Minimize,
  PhoneOff,
  Video,
} from 'lucide-react'
import { FC, useEffect, useRef, useState } from 'react'

import cn from 'clsx'

import { Flex } from '@/components/layout'

import { ControlButton } from '@/components/ui'

import { useAppSelector } from '@/shared/hooks'

import { app } from '@/store/slices'

import styles from './video-player.module.scss'

export const VideoPlayer: FC = () => {
  const [isFullScreen, setFullScreen] = useState<boolean>(false)
  const [isMicroMuted, setMicroMuted] = useState<boolean>(true)

  const { sideBar } = useAppSelector(app)

  const playerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const clickHandler = () => {
    if (!playerRef.current) return

    if (isFullScreen) {
      document.exitFullscreen()
    } else {
      playerRef.current.requestFullscreen()
    }
  }

  useEffect(() => {
    const ref = playerRef.current
    const video = videoRef.current

    if (!ref) return
    if (!video) return

    const fullScreenHandler = () => {
      if (document.fullscreenElement) {
        setFullScreen(true)
      } else {
        setFullScreen(false)
      }
    }

    ref.addEventListener('fullscreenchange', fullScreenHandler)
    video.oncontextmenu = () => false

    return () => {
      ref.removeEventListener('fullscreenchange', fullScreenHandler)
    }
  }, [])

  return (
    <div className={styles.player} ref={playerRef}>
      <Flex align="center" className={styles.live}>
        <div className={styles.onAirIcon} />

        <p className={styles.onAir}>LIVE</p>
        <span className={styles.divider} />
        <p className={styles.duration}>01:23:39</p>
      </Flex>

      <div
        onClick={() => {
          if (!videoRef.current) return

          videoRef.current.play()
        }}
        className={cn(styles.videoWrap, {
          [styles.fullScreen]: isFullScreen,
        })}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          poster="/skype.jpg"
          className={cn(styles.video, {
            [styles.roundedCorners]: !isFullScreen,
          })}
        >
          <source src="" />
        </video>
      </div>

      <Flex
        align="center"
        content="center"
        className={cn(styles.controls, {
          [styles.fullScreen]: isFullScreen,
          [styles.offset]: sideBar.isOpen,
        })}
      >
        <ControlButton
          doubleIcons={{
            firstIcon: !isFullScreen && <Maximize size={18} strokeWidth={2} />,
            secondIcon: isFullScreen && <Minimize size={18} strokeWidth={2} />,
          }}
          variant="secondary"
          onClick={clickHandler}
        />
        <ControlButton
          doubleIcons={{
            firstIcon: !isMicroMuted && <Mic size={18} strokeWidth={2} />,
            secondIcon: isMicroMuted && <MicOff size={18} strokeWidth={2} />,
          }}
          variant="secondary"
          onClick={() => {
            setMicroMuted(!isMicroMuted)
          }}
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
