import { FC } from 'react'
import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.min.css'

export const ToastProvider: FC = () => {
  return (
    <ToastContainer
      autoClose={2000}
      closeOnClick
      theme="dark"
      draggable={false}
      hideProgressBar
      transition={Slide}
      bodyClassName="toast-container"
      rtl={false}
    />
  )
}
