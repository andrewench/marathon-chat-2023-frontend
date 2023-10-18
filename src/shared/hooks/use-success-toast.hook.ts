import { useEffect } from 'react'
import { toast } from 'react-toastify'

interface ISuccessToast {
  data: Record<string, any>
  message: string
  callback?: () => void
}

export const useSuccessToast = ({ data, message, callback }: ISuccessToast) => {
  useEffect(() => {
    if (!data) return

    toast.success(message)

    if (callback) callback()
  }, [callback, data, message])
}
