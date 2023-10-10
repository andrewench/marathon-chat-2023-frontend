import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import Cookies from 'js-cookie'

import { AppConstant } from '@/shared/constants'

import { IUser } from '@/shared/types'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: AppConstant.app.baseApiUrl,
    prepareHeaders: headers => {
      const accessToken = Cookies.get(AppConstant.tokens.at.prefix)

      if (accessToken) headers.set('Authorization', `Bearer ${accessToken}`)

      return headers
    },
  }),
  tagTypes: ['User'],
  endpoints: ({ query }) => ({
    getMe: query<IUser, null>({
      query: () => ({
        url: 'user/me',
      }),
      providesTags: () => ['User'],
    }),
  }),
})

export const { useGetMeQuery } = userApi
