import { createApi } from '@reduxjs/toolkit/query/react'

import { customFetcher } from '@/shared/utils'

export const roomApi = createApi({
  reducerPath: 'roomApi',
  baseQuery: customFetcher,
  tagTypes: ['Room'],
  endpoints: ({ mutation }) => ({
    getRoomById: mutation<
      { id: number; roomId: string },
      { userId: number; roomId: string }
    >({
      query: body => ({
        url: '/room/id',
        method: 'POST',
        body,
      }),
    }),

    joinRoom: mutation<
      { isSuccess: boolean },
      { userId: number; room: { id: number; hash: string } }
    >({
      query: body => ({
        url: '/room/add',
        method: 'PUT',
        body,
      }),
    }),
  }),
})

export const { useGetRoomByIdMutation, useJoinRoomMutation } = roomApi
