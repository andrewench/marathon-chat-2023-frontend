import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { AppConstant } from '@/shared/constants'

import { TLoginCredentials, TSignUpCredentials } from '@/shared/types'

type Tokens = Record<'accessToken' | 'refreshToken', string>

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: AppConstant.app.baseApiUrl,
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

export const { useLoginMutation, useSignUpMutation } = authApi
