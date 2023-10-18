import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'
import Cookies from 'js-cookie'

import { AppConstant } from '@/shared/constants'

const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
  baseUrl: AppConstant.app.baseApiUrl,
  prepareHeaders: headers => {
    const accessToken = Cookies.get(AppConstant.tokens.at.prefix)

    if (accessToken) headers.set('Authorization', `Bearer ${accessToken}`)

    return headers
  },
})

export const customFetcher: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()

  let response = await baseQuery(args, api, extraOptions)

  if (response.error && response.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshResponse = await baseQuery(
          {
            url: '/auth/refresh',
            method: 'POST',
            body: {
              refreshToken: Cookies.get(AppConstant.tokens.rt.prefix),
            },
          },
          api,
          extraOptions,
        )

        if (refreshResponse.data) {
          const { accessToken, refreshToken } = refreshResponse.data as Record<
            'accessToken' | 'refreshToken',
            string
          >

          Cookies.set(AppConstant.tokens.at.prefix, accessToken, {
            expires: AppConstant.tokens.at.lifeTime,
          })

          Cookies.set(AppConstant.tokens.rt.prefix, refreshToken, {
            expires: AppConstant.tokens.rt.lifeTime,
          })

          response = await baseQuery(args, api, extraOptions)
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()

      response = await baseQuery(args, api, extraOptions)
    }
  }

  return response
}
