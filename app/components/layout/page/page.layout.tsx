import { useRouter } from 'next/navigation'

import { FC, PropsWithChildren, useEffect } from 'react'

import { AnimatePresence } from 'framer-motion'

import {
  ConfirmModalWindow,
  Flex,
  SideBar,
  UploadModalWindow,
} from '@/components/layout'

import { TokenService } from '@/services'

import { useActions, useAppSelector } from '@/shared/hooks'

import { useGetMeQuery } from '@/store/api'

import { modals } from '@/store/slices'

import styles from './page.module.scss'

export const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  const { data } = useGetMeQuery(null)

  const router = useRouter()

  const { logout, upload } = useAppSelector(modals)

  const { setUserData, setModalWindow } = useActions()

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

              TokenService.removeTokens()
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
