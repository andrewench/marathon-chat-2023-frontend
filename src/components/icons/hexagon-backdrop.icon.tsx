import { FC } from 'react'

export const HexagonBackdropIcon: FC<{ dataRole: string }> = ({ dataRole }) => {
  return (
    <svg
      width="159"
      height="176"
      viewBox="0 0 159 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-role={dataRole}
    >
      <path
        d="M68.0846 2.66033C74.2295 -0.847547 81.7705 -0.847555 87.9154 2.66032L144.992 35.2431C151.227 38.8028 155.076 45.432 155.076 52.6121V117.388C155.076 124.568 151.227 131.197 144.992 134.757L87.9154 167.34C81.7705 170.848 74.2295 170.848 68.0846 167.34L11.0084 134.757C4.77271 131.197 0.923737 124.568 0.923737 117.388V52.6122C0.923737 45.432 4.7727 38.8028 11.0084 35.2431L68.0846 2.66033Z"
        fill="white"
        fillOpacity="0.1"
      />
    </svg>
  )
}
