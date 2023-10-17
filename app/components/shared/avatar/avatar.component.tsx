import Image from 'next/image'

import { ImagePlus } from 'lucide-react'
import { FC } from 'react'

import cn from 'clsx'

import {
  HexagonBackdropIcon,
  HexagonMaskIcon,
  HexagonMaskMiniIcon,
  HexagonOutlineIcon,
} from '@/components/icons'

import { AppConstant } from '@/shared/constants'

import { useActions } from '@/shared/hooks'
import { useAppSelector } from '@/shared/hooks'

import { user } from '@/store/slices'

import styles from './avatar.module.scss'

interface IAvatar {
  variant: 'normal' | 'mini'
}

export const Avatar: FC<IAvatar> = ({ variant }) => {
  const { setModalWindow } = useActions()

  const { data: userData } = useAppSelector(user)

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
            src={userData.avatar ?? AppConstant.files.avatar.defaultAvatar}
            alt="Avatar"
            fill
            quality={100}
            priority={true}
            draggable={false}
          />
        </div>

        <svg
          width="28"
          height="32"
          viewBox="0 0 28 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <clipPath id="upload-avatar-mask">
            <path
              d="M11.5 1.44338C13.047 0.550212 14.953 0.550212 16.5 1.44338L25.3564 6.55662C26.9034 7.44979 27.8564 9.10042 27.8564 10.8868V21.1132C27.8564 22.8996 26.9034 24.5502 25.3564 25.4434L16.5 30.5566C14.953 31.4498 13.047 31.4498 11.5 30.5566L2.64359 25.4434C1.09659 24.5502 0.143594 22.8996 0.143594 21.1132V10.8868C0.143594 9.10042 1.09659 7.44979 2.64359 6.55662L11.5 1.44338Z"
              fill="black"
            />
          </clipPath>
        </svg>

        <button
          onClick={() =>
            setModalWindow({
              modal: 'uploadAvatar',
              isOpen: true,
            })
          }
          className={styles.uploadAvatar}
        >
          <ImagePlus size={17} strokeWidth={2} />
        </button>
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
            src={userData.avatar ?? AppConstant.files.avatar.defaultAvatar}
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
