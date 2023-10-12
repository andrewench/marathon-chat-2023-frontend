import { useRouter } from 'next/navigation'

import { FC, PropsWithChildren, useEffect } from 'react'

import { AnimatePresence } from 'framer-motion'
import Cookies from 'js-cookie'

import {
  ConfirmModalWindow,
  Flex,
  SideBar,
  UploadModalWindow,
} from '@/components/layout'

import { AppConstant } from '@/shared/constants'

import { useActions, useAppSelector } from '@/shared/hooks'

import { useGetMeQuery } from '@/store/api'

import { modals } from '@/store/slices'

import styles from './page.module.scss'

export const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  const { data } = useGetMeQuery(null)

  const router = useRouter()

  const { logout, upload } = useAppSelector(modals)

  const { setUserData, setModalWindow, clearUserData } = useActions()

  useEffect(() => {
    if (!data) return

    setUserData(data)
  }, [data, setUserData])

  return (
    <Flex className={styles.box}>
      <SideBar />

      <AnimatePresence>
        {logout.isOpen && (
          <ConfirmModalWindow
            title="Are you sure you want to log out?"
            onConfirm={() => {
              router.push('/login')

              Cookies.remove(AppConstant.tokens.at.prefix)
              Cookies.remove(AppConstant.tokens.rt.prefix)

              clearUserData()
            }}
            onClose={() => {
              setModalWindow({
                modal: 'logout',
                isOpen: false,
              })
            }}
            labels={{
              confirm: 'Yes',
              cancel: 'Cancel',
            }}
          />
        )}

        {upload.isOpen && <UploadModalWindow title="Attach file" />}
      </AnimatePresence>

      {children}
    </Flex>
  )
}
