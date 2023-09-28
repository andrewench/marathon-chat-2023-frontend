import { FC } from 'react'

export const HexagonOutlineIcon: FC<{ dataRole: string }> = ({ dataRole }) => {
  return (
    <svg
      width="108"
      height="124"
      viewBox="0 0 108 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-role={dataRole}
    >
      <path
        d="M56.75 2.16506L104.444 29.701C106.145 30.6834 107.194 32.4991 107.194 34.4641V89.5359C107.194 91.5009 106.145 93.3166 104.444 94.299L56.75 121.835C55.0483 122.817 52.9517 122.817 51.25 121.835L3.55642 94.299C1.85472 93.3166 0.806423 91.5009 0.806423 89.5359V34.4641C0.806423 32.4991 1.85472 30.6834 3.55642 29.701L51.25 2.16506C52.9517 1.18258 55.0483 1.18258 56.75 2.16506Z"
        stroke="url(#paint0_linear_55_2)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_55_2"
          x1="54"
          y1="0"
          x2="54"
          y2="124"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0983154" stopColor="#E65C1C" />
          <stop offset="0.644593" stopColor="#CA04E7" />
        </linearGradient>
      </defs>
    </svg>
  )
}
