import { useRouter } from 'next/navigation'

import { ChangeEvent, FC, useEffect, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'

import { Form, FormActions, ModalWindow } from '@/components/layout'

import { TextField } from '@/components/ui'

import { AppConstant } from '@/shared/constants'

import { JoinChatSchema } from '@/shared/schemes'

import { useActions, useConfiguredForm } from '@/shared/hooks'

import styles from './join-chat.module.scss'

export const JoinChatModalWindow: FC = () => {
  const [isDisabled, setDisabled] = useState<boolean>(true)

  const router = useRouter()

  const { setModalWindow } = useActions()

  const methods = useConfiguredForm<{ roomId: string }>(JoinChatSchema)

  const onSubmit: SubmitHandler<{ roomId: string }> = payload => {
    router.push(
      `/classroom?${AppConstant.params.chat.queries.room.key}=${payload.roomId}`,
    )

    setModalWindow({
      modal: 'joinChat',
      isOpen: false,
    })
  }

  useEffect(() => {
    return () => {
      setDisabled(true)
    }
  }, [])

  return (
    <ModalWindow
      title="Join the chat"
      onClose={() =>
        setModalWindow({
          modal: 'joinChat',
          isOpen: false,
        })
      }
    >
      <Form methods={methods} onSubmit={onSubmit} className={styles.form}>
        <TextField<{ roomId: string }>
          type="text"
          field="roomId"
          placeholder="Room ID"
          autoComplete="off"
          onChange={(
            event?: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
          ) => {
            const value = event?.target.value

            Boolean(value?.length) ? setDisabled(false) : setDisabled(true)
          }}
        />

        <FormActions
          modalWindow="joinChat"
          confirm={{
            label: 'Join',
            disabled: isDisabled,
          }}
          cancel={{
            label: 'Cancel',
          }}
          className={styles.actions}
        />
      </Form>
    </ModalWindow>
  )
}
