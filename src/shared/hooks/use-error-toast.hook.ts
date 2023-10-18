import { useEffect } from 'react'
import { toast } from 'react-toastify'

import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { TErrorResponse } from '@/shared/types'

interface IErrorToast {
  error: FetchBaseQueryError | SerializedError | undefined
  callback?: () => void
}

export const useErrorToast = ({ error, callback }: IErrorToast) => {
  useEffect(() => {
    if (!error) return

    const { data } = error as TErrorResponse

    toast.error(data.message)

    if (callback) callback()
  }, [callback, error])
}
