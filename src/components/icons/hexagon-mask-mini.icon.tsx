import { FC } from 'react'

export const HexagonMaskMiniIcon: FC<{ id: string }> = ({ id }) => {
  return (
    <svg
      width="47"
      height="52"
      viewBox="0 0 47 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <clipPath id={id}>
        <path
          d="M18.4297 1.98255C21.5593 0.141629 25.4407 0.141626 28.5703 1.98255L41.5199 9.60011C44.5743 11.3968 46.4497 14.6758 46.4497 18.2194V33.7806C46.4497 37.3242 44.5743 40.6032 41.5199 42.3999L28.5703 50.0175C25.4407 51.8584 21.5593 51.8584 18.4297 50.0175L5.48008 42.3999C2.42572 40.6032 0.550327 37.3242 0.550327 33.7806V18.2194C0.550327 14.6758 2.42572 11.3968 5.48007 9.60011L18.4297 1.98255Z"
          fill="black"
          fillOpacity="1"
        />
      </clipPath>
    </svg>
  )
}
