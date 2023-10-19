import { FC, useCallback, useEffect, useId, useMemo, useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { FormActions, ModalWindow } from '@/components/layout'

import { AppConstant } from '@/shared/constants'

import { useActions, useAppSelector } from '@/shared/hooks'

import { TErrorResponse } from '@/shared/types'

import { useUploadAvatarMutation } from '@/store/api'

import { modals, user } from '@/store/slices'

import styles from './upload-avatar-modal.module.scss'

export const UploadAvatarModalWindow: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const labelId = useId()

  const { data: userData } = useAppSelector(user)
  const { uploadAvatar } = useAppSelector(modals)

  const { setModalWindow } = useActions()

  const [uploadImage, { data, error }] = useUploadAvatarMutation()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    clearErrors,
    watch,
    setValue,
  } = useForm<{ image: File | undefined }>({
    mode: 'onChange',
  })

  const imageFile = watch('image')

  const onSubmit: SubmitHandler<{ image: File | undefined }> = payload => {
    if (!payload.image) return

    const formData = new FormData()

    formData.append('picture', payload.image)
    formData.append('userId', String(userData.id))

    uploadImage(formData)
  }

  const changeHandler = useCallback(() => {
    const input = inputRef.current

    if (!input) return
    if (!input.files) return

    const image = input.files[0]

    if (!image) return

    if (image.size <= AppConstant.files.avatar.maxSize) {
      clearErrors('image')

      setValue('image', image)
    } else {
      setValue('image', undefined)

      setError('image', {
        message: 'The image should not exceed 5 mb',
      })
    }
  }, [clearErrors, setError, setValue])

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

    setValue('image', undefined)

    if (errors['image']?.message) {
      clearErrors('image')
    }
  }, [clearErrors, errors, setValue, uploadAvatar.isOpen])

  useEffect(() => {
    if (!data) return

    toast.success('Avatar successfully updated')

    setModalWindow({
      modal: 'uploadAvatar',
      isOpen: false,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useEffect(() => {
    if (!error) return

    const { data } = error as TErrorResponse

    toast.error(data.message)
  }, [error])

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
            {imageFile && Boolean(imageFile.size) && (
              <p className={styles.file}>
                <span>Selected file:</span> {imageFile.name}
              </p>
            )}
          </>
        )}

        <FormActions
          modalWindow="uploadAvatar"
          confirm={{
            label: 'Upload',
            disabled: !imageFile,
          }}
          cancel={{
            label: 'Cancel',
          }}
        />
      </form>
    </ModalWindow>
  )
}
