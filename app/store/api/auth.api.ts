import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { AppConstant } from '@/shared/constants'

import {
  TAllTokens,
  TLoginCredentials,
  TSignUpCredentials,
} from '@/shared/types'

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: AppConstant.app.baseApiUrl,
  }),
  endpoints: ({ mutation }) => ({
    login: mutation<TAllTokens, TLoginCredentials>({
      query: body => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
    }),
    signUp: mutation<TAllTokens, Omit<TSignUpCredentials, 'confirm'>>({
      query: body => ({
        url: 'auth/signup',
        method: 'PUT',
        body,
      }),
    }),
  }),
})

export const { useLoginMutation, useSignUpMutation } = authApi
