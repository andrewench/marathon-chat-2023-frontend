import { ObjectSchema, object, string } from 'yup'

export const JoinChatSchema: ObjectSchema<{ roomId: string }> = object().shape({
  roomId: string().required('The field is required'),
})
