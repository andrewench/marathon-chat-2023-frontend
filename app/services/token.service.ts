import Cookies from 'js-cookie'

import { AppConstant } from '@/shared/constants'

const { at, rt } = AppConstant.tokens

export class TokenService {
  static readonly atPrefix = at.prefix
  static readonly rtPrefix = rt.prefix

  static readonly atExpires = at.lifeTime
  static readonly rtExpires = rt.lifeTime

  static setTokens({
    accessToken,
    refreshToken,
  }: Record<'accessToken' | 'refreshToken', string>) {
    Cookies.set(this.atPrefix, accessToken, {
      expires: this.atExpires,
    })

    Cookies.set(this.rtPrefix, refreshToken, {
      expires: this.rtExpires,
    })
  }

  static removeTokens() {
    Cookies.remove(at.prefix)
    Cookies.remove(rt.prefix)
  }
}
