import {
  FC,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import cn from 'clsx'

import { ModalWindow } from '@/components/layout'

import { StyledButton } from '@/components/ui'

import { AppConstant } from '@/shared/constants'

import { useActions, useAppSelector } from '@/shared/hooks'

import { modals } from '@/store/slices'

import styles from './upload-avatar-modal.module.scss'

export const UploadAvatarModalWindow: FC = () => {
  const [file, setFile] = useState<File>()

  const inputRef = useRef<HTMLInputElement>(null)

  const { uploadAvatar } = useAppSelector(modals)

  const labelId = useId()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    clearErrors,
  } = useForm<{ image: File }>({
    mode: 'onChange',
  })

  const { setModalWindow } = useActions()

  const onSubmit: SubmitHandler<{ image: File }> = payload => {
    if (!payload.image) return

    const formData = new FormData()

    formData.append('picture', payload.image)
  }

  const changeHandler = useCallback(() => {
    const input = inputRef.current

    if (!input) return
    if (!input.files) return

    const image = input.files[0]

    if (!image) return

    if (image.size <= AppConstant.files.avatar.maxSize) {
      clearErrors('image')

      setFile(image)
    } else {
      setFile(undefined)

      setError('image', {
        message: 'The image should not exceed 5 mb',
      })
    }
  }, [clearErrors, setError])

  const overrideRegister = useMemo(
    () => ({
      ...register('image', { required: true }),
      name: 'files[]',
      ref: inputRef,
      onChange: changeHandler,
    }),
    [changeHandler, register],
  )

  useEffect(() => {
    if (uploadAvatar.isOpen) return

    if (!uploadAvatar.isOpen) {
      setFile(undefined)

      if (errors['image']?.message) {
        clearErrors('image')
      }
    }
  }, [clearErrors, errors, uploadAvatar.isOpen])

  return (
    <ModalWindow
      title="Upload avatar"
      onClose={() =>
        setModalWindow({
          modal: 'uploadAvatar',
          isOpen: false,
        })
      }
    >
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
        className={styles.form}
      >
        <label htmlFor={labelId} className={styles.label}>
          Select file
        </label>

        <input
          id={labelId}
          type="file"
          accept="image/jpg,image/png,image/jpeg"
          {...overrideRegister}
          className={styles.input}
        />

        {errors['image']?.message ? (
          <p className={styles.errorLabel}>{errors['image'].message}</p>
        ) : (
          <>
            {file && Boolean(file.size) && (
              <p className={styles.file}>
                <span>Selected file:</span> {file.name}
              </p>
            )}
          </>
        )}

        <div className={styles.actions}>
          <StyledButton
            type="submit"
            variant={file ? 'filled' : 'disabled'}
            className={cn(styles.button, styles.upload)}
          >
            Upload
          </StyledButton>

          <StyledButton
            type="button"
            variant="outline"
            onClick={() =>
              setModalWindow({
                modal: 'uploadAvatar',
                isOpen: false,
              })
            }
            className={styles.button}
          >
            Cancel
          </StyledButton>
        </div>
      </form>
    </ModalWindow>
  )
}
