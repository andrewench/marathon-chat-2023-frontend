import { type NextRequest, NextResponse } from 'next/server'

import { AppConstant } from '@/shared/constants'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const accessToken = request.cookies.get(AppConstant.tokens.at.prefix)
  const refreshToken = request.cookies.get(AppConstant.tokens.rt.prefix)

  switch (pathname) {
    case '/login':
      return accessToken
        ? NextResponse.redirect(new URL('/classroom', request.url))
        : NextResponse.next()

    case '/classroom':
      return !refreshToken
        ? NextResponse.redirect(new URL('/login', request.url))
        : NextResponse.next()
  }
}

export const config = {
  matcher: ['/login', '/classroom'],
}
