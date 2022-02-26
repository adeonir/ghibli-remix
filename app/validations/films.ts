import * as yup from 'yup'
import { withYup } from '@remix-validated-form/with-yup'

export const filmSchema = withYup(
  yup.object({
    title: yup.string().required('Title is required'),
  })
)
