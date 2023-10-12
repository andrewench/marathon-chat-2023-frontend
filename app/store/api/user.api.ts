import { createApi } from '@reduxjs/toolkit/query/react'

import { customFetcher } from '@/shared/utils'

import { IUser } from '@/shared/types'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: customFetcher,
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
