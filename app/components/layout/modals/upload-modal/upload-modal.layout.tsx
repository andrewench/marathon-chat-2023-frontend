import Image from 'next/image'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Form, ModalWindow } from '@/components/layout'

import { StyledButton, TextField } from '@/components/ui'

import { useActions } from '@/shared/hooks'

import styles from './upload-modal.module.scss'

interface IUploadModal {
  title: string
}

type TUploadFields = {
  file: File
  message: string
}

export const UploadModalWindow: FC<IUploadModal> = ({ title }) => {
  const { setModalWindow } = useActions()

  const methods = useForm<TUploadFields>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<TUploadFields> = data => {
    console.log(data)
  }

  return (
    <ModalWindow
      title={title}
      onClose={() => setModalWindow({ modal: 'upload', isOpen: false })}
    >
      <Form methods={methods} onSubmit={onSubmit} className={styles.form}>
        <div className={styles.wrap}>
          <Image
            src="/attached_photo.jpg"
            width={150}
            height={400}
            alt="Attached photo"
            draggable={false}
          />
        </div>

        <TextField<TUploadFields>
          field="message"
          placeholder="Add description"
          multiLine
        />

        <StyledButton type="submit" variant="filled" className={styles.submit}>
          Send
        </StyledButton>
      </Form>
    </ModalWindow>
  )
}
