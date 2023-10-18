import { FC } from 'react'

export const StyledGradientMaskIcon: FC<{ id: string }> = ({ id }) => {
  return (
    <svg width="0" height="0">
      <linearGradient id={id} x1="100%" y1="100%" x2="0%" y2="0%">
        <stop stopColor="#fe5f0c" offset="0%" />
        <stop stopColor="#c731ef" offset="100%" />
      </linearGradient>
    </svg>
  )
}
