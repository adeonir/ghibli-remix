import * as yup from 'yup'
import { withYup } from '@remix-validated-form/with-yup'

export const commentSchema = withYup(
  yup.object({
    name: yup.string().required('Name is required'),
    message: yup.string().required('Message is required'),
  })
)
