import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { TLoginCredentials, TSignUpCredentials } from '@/shared/types'

type Tokens = Record<'accessToken' | 'refreshToken', string>

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: ({ mutation }) => ({
    login: mutation<Tokens, TLoginCredentials>({
      query: body => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
    }),
    signUp: mutation<Tokens, Omit<TSignUpCredentials, 'confirm'>>({
      query: body => ({
        url: 'auth/signup',
        method: 'PUT',
        body,
      }),
    }),
  }),
})

export const { useLoginMutation, useSignUpMutation } = userApi
