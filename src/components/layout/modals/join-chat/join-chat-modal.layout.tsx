import { useRouter } from 'next/navigation'

import { ChangeEvent, FC, useEffect, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Form, FormActions, ModalWindow } from '@/components/layout'

import { TextField } from '@/components/ui'

import { AppConstant } from '@/shared/constants'

import { JoinChatSchema } from '@/shared/schemes'

import { useActions, useAppSelector, useConfiguredForm } from '@/shared/hooks'

import { TErrorResponse } from '@/shared/types'

import { useGetRoomByIdMutation, useJoinRoomMutation } from '@/store/api'

import { user } from '@/store/slices'

import styles from './join-chat.module.scss'

export const JoinChatModalWindow: FC = () => {
  const [isDisabled, setDisabled] = useState<boolean>(true)

  const router = useRouter()

  const { data: userData, room: roomData } = useAppSelector(user)
  const { setModalWindow, setRoomData } = useActions()

  const methods = useConfiguredForm<{ roomId: string }>(JoinChatSchema)

  const roomId = methods.watch('roomId')

  const [getRoom, { data, error }] = useGetRoomByIdMutation()
  const [joinRoom] = useJoinRoomMutation()

  const onSubmit: SubmitHandler<{ roomId: string }> = payload => {
    const data = {
      roomId: payload.roomId,
      userId: userData.id,
    }

    setRoomData({
      roomId: data.roomId,
      userId: userData.id,
    })

    getRoom(data)
  }

  useEffect(() => {
    if (!data) return

    const { room } = AppConstant.params.chat.queries

    router.push(`/classroom?${room.key}=${roomData.roomId}`)

    setModalWindow({
      modal: 'joinChat',
      isOpen: false,
    })
  }, [data, joinRoom, roomData.roomId, router, setModalWindow, userData.id])

  useEffect(() => {
    if (!error) return

    const { data } = error as TErrorResponse

    toast.error(data.message)
  }, [error])

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
