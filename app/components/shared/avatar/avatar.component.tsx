import Image from 'next/image'

import { FC } from 'react'

import cn from 'clsx'

import {
  HexagonBackdropIcon,
  HexagonMaskIcon,
  HexagonMaskMiniIcon,
  HexagonOutlineIcon,
} from '@/components/icons'

import styles from './avatar.module.scss'

interface IAvatar {
  variant: 'normal' | 'mini'
}

export const Avatar: FC<IAvatar> = ({ variant }) => {
  if (variant === 'normal') {
    return (
      <div className={cn(styles.box, styles.normal)}>
        <div className={cn(styles.backdrop, styles.normal)}>
          <HexagonBackdropIcon dataRole="hexagon-backdrop" />
          <HexagonBackdropIcon dataRole="hexagon-backdrop-rotate" />

          <HexagonOutlineIcon dataRole="hexagon-icon-outline" />
        </div>

        <div className={cn(styles.avatar, styles.normal)}>
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
      </div>
    )
  }

  if (variant === 'mini') {
    return (
      <div className={cn(styles.box, styles.mini)}>
        <div className={cn(styles.backdrop, styles.mini)}>
          <HexagonBackdropIcon dataRole="hexagon-backdrop" />
          <HexagonBackdropIcon dataRole="hexagon-backdrop-rotate" />
        </div>

        <div className={cn(styles.avatar, styles.mini)}>
          <HexagonMaskMiniIcon id="avatar-hexagon-mask-mini" />

          <Image
            src="/avatar_mini.png"
            alt="Avatar"
            fill
            quality={100}
            priority={true}
            draggable={false}
          />
        </div>
      </div>
    )
  }
}
