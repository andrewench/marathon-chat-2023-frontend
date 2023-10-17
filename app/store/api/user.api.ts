import { createApi } from '@reduxjs/toolkit/query/react'

import { customFetcher } from '@/shared/utils'

import { IUser } from '@/shared/types'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: customFetcher,
  tagTypes: ['User'],
  endpoints: ({ query, mutation }) => ({
    getMe: query<IUser, null>({
      query: () => ({
        url: '/user/me',
      }),
      providesTags: () => ['User'],
    }),

    uploadAvatar: mutation<{ isUploaded: boolean }, FormData>({
      query: body => ({
        url: '/user/avatar',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
})

export const { useGetMeQuery, useUploadAvatarMutation } = userApi
