import Image from 'next/image'

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Form, ModalWindow } from '@/components/layout'

import { StyledButton, TextField } from '@/components/ui'

import { useActions } from '@/shared/hooks'

import styles from './attach-modal.module.scss'

type TAttachFields = {
  file: File
  message: string
}

export const AttachModalWindow: FC = () => {
  const { setModalWindow } = useActions()

  const methods = useForm<TAttachFields>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<TAttachFields> = data => {}

  return (
    <ModalWindow
      title="Attach file"
      onClose={() => setModalWindow({ modal: 'attach', isOpen: false })}
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

        <TextField<TAttachFields>
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
