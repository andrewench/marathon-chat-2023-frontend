import { PropsWithChildren } from 'react'

export type PropsWithClassName<P = unknown> = P & {
  className?: string
}

export type PropsWithClassNameAndChildren<P = unknown> = P &
  PropsWithChildren<PropsWithClassName>
